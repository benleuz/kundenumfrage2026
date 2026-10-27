/* Antwort-Code: Umfrage-Antworten <-> eine Zeile Text.
   Format: APK1:<base64url der deflate-komprimierten JSON-Antwort>.
   APK0 = unkomprimiert (Fallback für alte Browser). Der Punkt am Ende markiert das Code-Ende. */
var AntwortCode = (function(){
  function toB64url(bytes){
    var s = ""; for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
  }
  function fromB64url(str){
    str = str.replace(/-/g,"+").replace(/_/g,"/"); while (str.length % 4) str += "=";
    var bin = atob(str), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  async function pipe(bytes, stream){
    var res = new Response(new Blob([bytes]).stream().pipeThrough(stream));
    return new Uint8Array(await res.arrayBuffer());
  }
  async function encode(obj){
    var raw = new TextEncoder().encode(JSON.stringify(obj));
    if (typeof CompressionStream === "function"){
      try { return "APK1:" + toB64url(await pipe(raw, new CompressionStream("deflate-raw"))) + "."; } catch(e){}
    }
    return "APK0:" + toB64url(raw) + ".";
  }
  async function decodeOne(ver, body){
    var bytes = fromB64url(body);
    if (ver === "1") bytes = await pipe(bytes, new DecompressionStream("deflate-raw"));
    return JSON.parse(new TextDecoder().decode(bytes));
  }
  /* Findet alle Codes in beliebigem Text (ganze Mails, Zeilenumbrüche, «>»-Zitate) */
  async function extractAll(text){
    var re = /APK([01]):([A-Za-z0-9_\-\s>]+?)\./g, m, out = [], bad = 0;
    while ((m = re.exec(text))){
      var body = m[2].replace(/[^A-Za-z0-9_\-]/g,"");
      try { out.push({code: "APK"+m[1]+":"+body+".", data: await decodeOne(m[1], body)}); }
      catch(e){ bad++; }
    }
    return {items: out, bad: bad};
  }
  return {encode: encode, extractAll: extractAll};
})();
