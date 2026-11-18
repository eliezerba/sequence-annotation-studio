/* Subject map used ONLY to help compose a catalogue search. It follows the top levels of the Dewey
   Decimal Classification (DDC), which BARTOC uses to classify every vocabulary it lists. Labels are
   short descriptive names written for Mabat, not official DDC captions. Choosing a node fills the
   search fields; it does not preload any vocabulary or term into a project.
   Format: {c: DDC code, he: Hebrew name, q: English search terms, kids: [[code, he, [q...]], ...]} */
window.MabatTopics=[
{c:'0',he:'מידע, מחשוב וספרים',q:['information science','computing'],kids:[
 ['004','מחשבים ומחשוב',['computer science','computing']],
 ['020','ספריות ומדעי המידע',['library and information science','libraries']],
 ['060','מוזיאונים וארגונים',['museums','cultural institutions']],
 ['070','עיתונות והוצאה לאור',['journalism','publishing','news media']],
 ['090','כתבי יד וספרים נדירים',['manuscripts','rare books']]]},
{c:'1',he:'פילוסופיה ופסיכולוגיה',q:['philosophy','psychology'],kids:[
 ['110','מטאפיזיקה',['metaphysics']],
 ['150','פסיכולוגיה',['psychology']],
 ['160','לוגיקה',['logic']],
 ['170','אתיקה',['ethics','moral philosophy']],
 ['180','פילוסופיה עתיקה, ימי־ביניימית ומזרחית',['ancient philosophy','medieval philosophy']]]},
{c:'2',he:'דת',q:['religion','theology'],kids:[
 ['220','המקרא',['Bible','biblical studies']],
 ['230','נצרות',['Christianity','theology']],
 ['296','יהדות',['Judaism','Jewish studies']],
 ['297','אסלאם',['Islam','Islamic studies']],
 ['290','דתות אחרות והשוואתיות',['comparative religion','world religions']]]},
{c:'3',he:'חברה, פוליטיקה וכלכלה',q:['social sciences'],kids:[
 ['305','קבוצות חברתיות ומגדר',['social groups','gender studies']],
 ['320','מדע המדינה',['political science','politics']],
 ['330','כלכלה',['economics']],
 ['340','משפט',['law','legal terminology']],
 ['370','חינוך',['education','pedagogy']],
 ['390','מנהגים ופולקלור',['customs','folklore','ethnography']]]},
{c:'4',he:'שפה ובלשנות',q:['language','linguistics'],kids:[
 ['410','בלשנות',['linguistics']],
 ['470','לטינית',['Latin language']],
 ['480','יוונית',['Greek language']],
 ['492','שפות שמיות ועברית',['Semitic languages','Hebrew language']]]},
{c:'5',he:'מדעי הטבע',q:['natural sciences','science'],kids:[
 ['510','מתמטיקה',['mathematics']],
 ['520','אסטרונומיה',['astronomy']],
 ['530','פיזיקה',['physics']],
 ['540','כימיה',['chemistry']],
 ['550','מדעי כדור הארץ',['earth sciences','geology']],
 ['570','ביולוגיה',['biology','life sciences']],
 ['580','צמחים',['botany','plants']],
 ['590','בעלי חיים',['zoology','animals']]]},
{c:'6',he:'טכנולוגיה ורפואה',q:['technology','medicine'],kids:[
 ['610','רפואה ובריאות',['medicine','health']],
 ['620','הנדסה',['engineering']],
 ['630','חקלאות',['agriculture']],
 ['640','משק בית ומזון',['home economics','food']],
 ['690','בנייה',['building construction']]]},
{c:'7',he:'אמנויות ופנאי',q:['arts','visual arts'],kids:[
 ['709','היסטוריה של האמנות',['art history']],
 ['710','תכנון נוף ועיר',['landscape architecture','urban planning']],
 ['720','אדריכלות',['architecture']],
 ['730','פיסול וקרמיקה',['sculpture','ceramics']],
 ['740','רישום ואמנות דקורטיבית',['drawing','decorative arts']],
 ['750','ציור',['painting']],
 ['760','גרפיקה והדפס',['printmaking','graphic arts']],
 ['770','צילום',['photography']],
 ['780','מוזיקה',['music']],
 ['790','תיאטרון, קולנוע וספורט',['performing arts','film','sports']]]},
{c:'8',he:'ספרות',q:['literature'],kids:[
 ['808','רטוריקה ויצירה ספרותית',['rhetoric','literary composition']],
 ['809','תיאוריה וביקורת ספרותית',['literary criticism','literary theory']],
 ['820','ספרות אנגלית',['English literature']],
 ['870','ספרות לטינית',['Latin literature']],
 ['880','ספרות יוונית',['Greek literature']],
 ['892','ספרות עברית וערבית',['Hebrew literature','Arabic literature']]]},
{c:'ex-comics-holocaust',example:true,he:'דוגמה לנושא מחקר: קומיקס ושואה',q:['comics','graphic novels','Holocaust'],kids:[]},
{c:'9',he:'היסטוריה וגאוגרפיה',q:['history','geography'],kids:[
 ['909','היסטוריה עולמית',['world history']],
 ['910','גאוגרפיה ומסעות',['geography','travel']],
 ['920','ביוגרפיה וגנאלוגיה',['biography','genealogy']],
 ['930','העת העתיקה וארכיאולוגיה',['ancient history','archaeology']],
 ['940','היסטוריה של אירופה',['European history']],
 ['956','המזרח התיכון',['Middle East history']]]}
];
