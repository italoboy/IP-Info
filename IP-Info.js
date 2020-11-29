// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;

// by italoboy

// Update: 1.

 let widget = await createWidget(); Script.setWidget(widget);

async function createWidget() { const req = new Request("http://ipinfo.io/json"); const data = await req.loadJSON(); let IPHeader = ""; let IP = data.ip; let w = new ListWidget(); w.backgroundColor = new Color(color2()); let titleTxt = w.addText(IPHeader);titleTxt.font = new Font("Helvetica",25); titleTxt.textColor = new Color(color1()); let bodyTxt = w.addText(IP);bodyTxt.font = new Font("Helvetica",15); bodyTxt.textColor = new Color(color1());let org = w.addText(data.org);
org.font = new Font("Helvetica",15); org.textColor = new Color(color1());let city = w.addText(data.city);
city.font = new Font("Helvetica",15); city.textColor = new Color(color1());let country = w.addText(data.country);
country.font = new Font("Helvetica",15); country.textColor = new Color(color1());const {transparent} = importModule("Transparent");
let bgImage = await transparent();
w.backgroundImage = bgImage;return w; }

function color1() { let mode = Color.dynamic; if (mode == true) { return "#FF6A00"; } else { return "#FF6A00"; } }

function color2() { let mode = Color.dynamic; if (mode == true) { return "#FF6A00"; } else { return "#FF6A00"; } }
