const FaceConstantElm = ["<div style=\"font-size: calc(min(80vh, 80vw) / 10);\">😐</div>", "white", ""];
const WholesomeConstantElm = ["✨ actually wholesome ✨", "random", ""];
let BingoType = sessionStorage.getItem("BingoType");
if(BingoType == null)
    BingoType = "bad female anatomy";
let TableTypeElement = 
{
    "bad female anatomy" : [
        ["a man wrote this", "random", ""],
        ["victim blaming", "random", ""],
        ["made up stats", "random", ""],
        ["bad anatomy", "random", ""],
        ["twitter alpha male", "random", ""],
        ["fake s** facts", "random", ""],
        ["I made this up to get mad about", "random", ""],
        ["no means \"_____\"", "random", ""],
        ["something something kids n' family", "random", ""],
        ["WTF", "random", ""],
        ["Barely literate", "random", ""],
        ["I can tell you're gay", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
        ["period \"facts\"", "random", ""],
        ["sloot \"logic\"", "random", ""],
        ["purity", "random", ""],
        ["endorse abuse", "random", ""],
        ["gate-keep", "random", ""],
        ["down bad", "random", ""],
        ["pickup artistry", "random", ""],
        ["age stuff", "random", ""],
        ["sloot shaming", "random", ""],
        ["pointless gender war", "random", ""],
        ["\"traditional values\"", "random", ""],
        ["SMV", "random", ""],
        ["bad analogy", "random", ""],
        ["\"why won't she love me?\"", "random", ""],
        ["\"asking for it\"", "random", ""],
        ["fake stats", "random", ""],
        ["excusing cheating", "random", ""],
        ["s**ualizing non s**ual things", "random", ""],
        ["women vs women", "random", ""]
    ],
    "insane parents" : [
        ["trashing property", "random", ""],
        ["political nonsense", "random", ""],
        ["anger issues", "random", ""],
        ["oddly explicit rants", "random", ""],
        ["overbearing or controlling", "random", ""],
        ["treating adult like child", "random", ""],
        ["overblowing small issues", "random", ""],
        ["ignoring big issue", "random", ""],
        ["religious nonsense", "random", ""],
        ["homophobia", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
        ["it's all about me", "random", ""],
        ["gay agenda", "white", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
        ["drunk texts", "random", ""],
        ["creeping on family", "random", ""],
        ["anti-vax", "random", ""],
        ["transphobia", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1920px-Transgender_Pride_flag.svg.png"],
        ["body shaming", "random", ""],
        ["dismiss mental health", "random", ""],
        ["threatening housing", "random", ""],
        ["invading privacy / intimacy", "random", ""],
        ["stalker warning", "random", ""],
        ["conspiracy rant", "random", ""],
        ["location tracking", "random", ""],
        ["ignoring big issue", "random", ""],
        ["\"come to church\"", "random", ""],
        ["acting like children", "random", ""],
        ["bully your child", "random", ""],
        ["bad anatomy", "random", ""],
        ["sh**ty home remedies", "random", ""],
        ["guild trip", "random", ""],
        ["satanic panic", "random", ""],
        ["call the cops", "random", ""],
        ["fights about nothing", "random", ""],
        ["mask slip", "random", ""],
        ["facebook mom", "random", ""],
        ["kicking out", "random", ""],
        ["sus contact", "random", ""],
        ["cult vibes", "random", ""],
        ["child neglect", "random", ""],
        ["✨ violent ✨", "random", ""],
        ["WTF", "random", ""],
    ]
};