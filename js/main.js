// COMMENTS SECTION
/* 
Programmer: Mauricio, John, Jayden, Jayson, Creighton, and Luis
Date Last Modified: 11/08/2018
Goal/Purpose: Make a presentable MTAG
Status: in Progress

Story
A Giant meteor is headed towords earth and the world will end in 1 Year.
Our protagonist made a bucket list of things he/she wants to do before the world ends.
*/


// VARIABLES section
//User
var Currency = Math.floor(Math.random() * 401) + 100;
var InvIndex = [];
var InvQuantity = [];
var UserJob = 0;

//Gamemode
var Gamemode = "Standard";

//Battle
var Opponent = 12;

//Attacks
class AttackInfo {
    constructor(Name, Accuracy, Power) {
        this.Name = Name
        this.Accuracy = Accuracy
        this.Power = Power
    }
}
var Attacks = [
    new AttackInfo("Tackle", 40, 100),
    new AttackInfo("BulletPunch", 50, 95),
    new AttackInfo("SuperKick", 90, 70),
    new AttackInfo("Bash", 80, 80)
]

//Levels
class Level {
    constructor(HTH, ATK, DEF, SPD, EXP) {
        this.Health = HTH
        this.Attack = ATK
        this.Defense = DEF
        this.Speed = SPD
        this.Experience = EXP
    }
}
var Levels = [
    new Level(0, 0, 0, 0, 1), //Placeholder 0
    new Level(10, 5, 5, 5, 5),
    new Level(12, 6, 6, 6, 10),
    new Level(14, 7, 7, 7, 15),
    new Level(18, 8, 8, 8, 20),
    new Level(20, 9, 9, 9, 25), //Level 5
    new Level(22, 10, 10, 10, 30),
    new Level(24, 11, 11, 11, 35),
    new Level(26, 12, 12, 12, 40),
    new Level(28, 13, 13, 13, 45),
    new Level(30, 14, 14, 14, 50), //Level 10
    new Level(32, 15, 15, 15, 55),
    new Level(34, 16, 16, 16, 60),
    new Level(36, 17, 17, 17, 65),
    new Level(38, 18, 18, 18, 70),
    new Level(40, 19, 19, 19, 75), //Level 15
    new Level(42, 20, 20, 20, 80),
    new Level(44, 21, 21, 21, 85),
    new Level(46, 22, 22, 22, 90),
    new Level(48, 23, 23, 23, 95),
    new Level(50, 24, 24, 24, 100), //Level 20
];

//Characters
var ProfilePics = [
    "src/Sponge.jpg",
    "src/Squid.jpg",
    "src/Patrick.jpg",
    "src/Sandy.jpg",
    "src/Krab.jpg",
    "src/Plankton.jpg",
    "src/Gary.jpg",
    "src/Puff.jpg",
    "src/Whale.jpg",
    "src/Squid2.jpg",
    "src/King.jpg",
    "src/Lobster.jpg",
    "src/Computer.jpg",
    "src/myLeg.jpg",
    "src/Flying.jpg",
    "src/Parrot.jpg",
    "src/Fish.jpg",
    "src/Grandma.jpg",
    "src/Boy.jpg",
    "src/Man.jpg"
];
class CharacterInfo {
    constructor(Name, Gender, Level, Icon, Moves) {
        this.Name = Name
        this.Gender = Gender
        this.Level = Level
        this.Icon = ProfilePics[Icon]
        this.HealthCurrent = Levels[Level]['Health']
        this.ExperienceCurrent = 0
        this.Move = Moves
    }
}
var People = [ //Note User is always index 0
    new CharacterInfo("Yeah", "Male", 1, 0, [0, 1, 2, 3]),
    new CharacterInfo("Fest", "Male", 2, 1, [0, 1, 2, 3]),
    new CharacterInfo("Swift", "Male", 3, 2, [0, 1, 2, 3]),
    new CharacterInfo("Roush", "Female", 4, 3, [0, 1, 2, 3]),
    new CharacterInfo("Grub", "Male", 5, 4, [0, 1, 2, 3]),
    new CharacterInfo("Anvil", "Male", 6, 5, [0, 1, 2, 3]),
    new CharacterInfo("Tub", "Unknown", 7, 6, [0, 1, 2, 3]),
    new CharacterInfo("Slate", "Female", 8, 7, [0, 1, 2, 3]),
    new CharacterInfo("Grease", "Female", 9, 8, [0, 1, 2, 3]),
    new CharacterInfo("Glib", "Alpha Male", 10, 9, [0, 1, 2, 3]),
    new CharacterInfo("Scald", "Male", 11, 10, [0, 1, 2, 3]),
    new CharacterInfo("Lenses", "Male", 12, 11, [0, 1, 2, 3]),
    new CharacterInfo("Boop", "Female", 13, 12, [0, 1, 2, 3]),
    new CharacterInfo("Drip", "Male", 14, 13, [0, 1, 2, 3]),
    new CharacterInfo("Ghost", "Male", 15, 14, [0, 1, 2, 3]),
    new CharacterInfo("Matte", "Male", 16, 15, [0, 1, 2, 3]),
    new CharacterInfo("Flop", "Male", 17, 16, [0, 1, 2, 3]),
    new CharacterInfo("Fish", "Female", 18, 17, [0, 1, 2, 3]),
    new CharacterInfo("Thicc", "Male", 19, 18, [0, 1, 2, 3]),
    new CharacterInfo("Whey", "Female", 20, 19, [0, 1, 2, 3])
];

//Items
class ItemInfo {
    constructor(Name, Price, Desc) {
        this.Name = Name
        this.Price = Price
        this.Desc = Desc
    }
}
var Items = [
    new ItemInfo("Hot Pocket", 2, "Need a delicious and satisfying snack? Hot Pockets® brand sandwiches are made with quality ingredients to deliver delicious taste and big flavor. +5 health. Restores 10HP."),
    new ItemInfo("Maruchan Ramen", 5, "The Maruchan ramen is a very popular brand of noodles in the United-States. +15 health. Restores 20HP."),
    new ItemInfo("New TV Remote", 20, "Infrared All in One Remote Control. I guess you could throw it at somebdy?"),
    new ItemInfo("BackScraterenator 3000", 60, "This handy telescopic back scratcher features a comfortable cushion grip handle and a bear paw shaped metal claw. Use it to poke people, it probably hurts."),
    new ItemInfo("Caleb", 250, "If you feed him 25 cents, he'll fix your roof. +10 to max health because I didn't know what else to do with him."),
    new ItemInfo("Rosetta Stone", 10000, "REEEEEEEEEEEEEEET. Good luck trying to afford it. Levels you up instantly."),
    new ItemInfo("Rusty Sword", 100, "I found this in the dumpster out back so now im gonna sell it to you and make a huge profit."),
    new ItemInfo("Plastic shield", 20, "Here's this shield I stole from my neighbors kid. +5 defense."),
    new ItemInfo("Wooden shield", 50, "This state of the art sheid was made with some drift wood that I found. It's not my problem if it breaks."),
    new ItemInfo("Spork", 100, "Spork, now with 40% more spoon. Heals you fully.")
]

//Employment
class JobInfo {
    constructor(Job, Salary, Chance) {
        this.Job = Job
        this.Salary = Salary
        this.Chance = Chance
    }
}
var Jobs = [
    new JobInfo("Unemployed", 50, 100),
    new JobInfo("McDonalds", 300, 60),
    new JobInfo("Waiter", 400, 45),
    new JobInfo("Nurse", 800, 30),
    new JobInfo("FactoryWorker", 1000, 20),
    new JobInfo("Scientist", 2000, 3)
]

//Time
var Day365 = 1;
var DayMonth = 1;
var DayWeek = 1;
var Month = 0;
var DaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var FirstInMonth = [1, 32, 60, 91, 121, 152, 182, 213, 243, 274, 305, 335, 365];
var Year = 2047;


// FUNCTION section
function RefreshUI() {//Gets Constantly Updated
    //Removes Excess HP
    if (People[0]['HealthCurrent'] > Levels[People[0]['Level']]['Health']) {
        People[0]['HealthCurrent'] = Levels[People[0]['Level']]['Health'];
    }

    //Levels Up character
    if (People[0]['ExperienceCurrent'] > Levels[People[0]['Level']]['Experience']) {
        People[0]['Level']++
        People[0]['ExperienceCurrent'] = 0;
        alert(" Congrats! You are now Level " + People[0]['Level'])
    }

    //Set Game mode
    switch (Gamemode) {
        case "Standard":
            document.getElementById("SomeOptions").hidden = false;
            document.getElementById("Calendar").hidden = false;
            document.getElementById("Inventory").hidden = false;
            document.getElementById("NPCProfile").hidden = true;
            document.getElementById("BattleOptions").hidden = true;
            document.getElementById("BucketListCont").hidden = false;
            break;
        case "Battle":
            document.getElementById("SomeOptions").hidden = true;
            document.getElementById("Calendar").hidden = true;
            document.getElementById("Inventory").hidden = true;
            document.getElementById("NPCProfile").hidden = false;
            document.getElementById("BattleOptions").hidden = false;
            document.getElementById("BucketListCont").hidden = true;
            break;
    }

    // Update users job
    document.getElementById("display_userjobinfo").innerHTML = "Job: " + Jobs[UserJob]['Job'];

    // Update Currency and Currency Color
    document.getElementById("display_usercurrency").innerHTML = "Currency: $" + Currency;
    document.getElementById("display_usercurrency").style.color = (Currency <= 0 ? "red" : "white");

    // Refresh Inventory
    var inventory_buffer = "";
    for (i = 0; i < InvIndex.length; i++) {
        inventory_buffer += Items[InvIndex[i]]['Name'] + " (" + InvQuantity[i] + ")<br>";
    }
    if (InvIndex.length == 0) {
        document.getElementById("display_inventory").innerHTML = "Your inventory is empty!";
        document.getElementById("UseItemButton").hidden = true;
    } else {
        document.getElementById("display_inventory").innerHTML = inventory_buffer;
        document.getElementById("UseItemButton").hidden = false;

    }

    //MakeCalendar
    var DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var calendar_buffer = "";
    for (i = FirstInMonth[Month] - FirstInMonth[Month] % 7; i <= FirstInMonth[Month] + 42; i++) {
        if (i > FirstInMonth[Month] && i < DaysInMonth[Month] + FirstInMonth[Month] + 1) {
            if (i - 1 == Day365) {
                calendar_buffer += "<div class='item' id='calendarNumber'> <b>-" + (i - FirstInMonth[Month]) + "-</b></div>";
            }
            else {
                calendar_buffer += "<div class='item'>" + (i - FirstInMonth[Month]) + "</div>";
            }
        }
        else {
            calendar_buffer += "<div class='item'> </div>";
        }
        if (i % 7 == 0) {
            calendar_buffer += '</div><div class="calendar-row">';
        }
    }
    document.getElementById("display_calendar").innerHTML = calendar_buffer;
    document.getElementById("display_date").innerHTML = DayNames[DayWeek] + " " + MonthNames[Month] + " " + DayMonth + " " + Year;

    //Users Name and Gender
    document.getElementById("display_username").innerHTML = People[0]['Name'];
    document.getElementById("display_usergender").innerHTML = "Gender: " + People[0]['Gender'];
    document.getElementById("display_userstats").innerHTML = "Level: " + People[0]['Level'] + "<br>HP: " + People[0]['HealthCurrent'] + " / " + Levels[People[0]['Level']]['Health'] + "<br>ATK: " + Levels[People[0]['Level']]['Attack'] + "<br>DEF: " + Levels[People[0]['Level']]['Defense'] + "<br>SPD: " + Levels[People[0]['Level']]['Speed'] + "<br>EXP: " + People[0]['ExperienceCurrent'] + " / " + Levels[People[0]['Level']]['Experience'];
    document.getElementById("UserIcon").src = People[0]['Icon'];

    //NPCRefresh
    document.getElementById("display_NPCname").innerHTML = People[Opponent]['Name'];
    document.getElementById("display_NPCgender").innerHTML = "Gender: " + People[Opponent]['Gender'];
    document.getElementById("display_NPCStats").innerHTML = "Level: " + People[Opponent]['Level'] + "<br>HP: " + People[Opponent]['HealthCurrent'] + " / " + Levels[People[Opponent]['Level']]['Health'];
    document.getElementById("NPCIcon").src = People[Opponent]['Icon'];

    //Update BucketList
    //Do you have rossetta stone
    var bucketlist_buffer = "";
    var BucketlistCheck = [];
    var Exists = false;

    for (i = 0; i < InvIndex.length; i++) {
        if (InvIndex[i] == 5) {
            Exists = true;
        }
    }
    if (Exists == false) {
        bucketlist_buffer += "____ - Purchase a rosetta stone <br>";
        BucketlistCheck.push(false)
    }
    else {
        bucketlist_buffer += "Done - Purchase a rosetta stone <br>";
        BucketlistCheck.push(true)
    }

    //Do you have big money
    if (Currency >= 10000) {
        bucketlist_buffer += "Done - Get 10,000 Dollars <br>"
        BucketlistCheck.push(true)
    }
    else {
        bucketlist_buffer += "____ - Get 10,000 Dollars <br>"
        BucketlistCheck.push(false)
    }
    //Do you have big flex?
    if (People[0]['Level'] > 9) {
        bucketlist_buffer += "Done - Become level 10"
        BucketlistCheck.push(true)
    }
    else {
        bucketlist_buffer += "____ - Become level 10"
        BucketlistCheck.push(false)
    }
    document.getElementById("BucketList").innerHTML = bucketlist_buffer;

    var AllTrue = true;
    for (i = 1; i < bucketlist_buffer.length; i++) {
        if (BucketlistCheck[i] == false) {
            AllTrue = false;
        }
    }
    if (AllTrue == true) {
        alert("Nice You won!")
    }
}

//Store Functions
function OpenStore() {//Done
    var UserInput = prompt("Store Owner: \nHi how you doing? What do you need today\n1. Buy\n2. Sell");
    if (UserInput == 1) {
        Buy()
    } else if (UserInput == 2) {
        Sell()
    } else {
        alert("Store Owner: \nUhh. Have a nice day?")
    }
}

function Buy() {//Done
    var InvStore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var text = "";
    var i;

    //Formats the stores stock an user input
    for (i = 0; i < InvStore.length; i++) {
        text += (i + 1) + ". " + Items[InvStore[i]]['Name'] + " - $" + Items[InvStore[i]]['Price'] + "\n"
    }
    UserInput = prompt("Store Owner: \nChoose anything you like. \n\n" + text) - 1;
    if (UserInput < InvStore.length && UserInput >= 0) {
        var Many = prompt("Store Owner: \nHow many do you want to buy", 1)
        if (Many > 0 && Many <= 1000) {
            if (Currency > Items[InvStore[UserInput]]['Price'] * Many) {
                var Confirm = prompt(Items[InvStore[UserInput]]['Name'] + " x" + Many + " - $" + (Items[InvStore[UserInput]]['Price'] * Many) + "\n" + Items[InvStore[UserInput]]['Desc'] + "\n\nStore Owner: \nAre you sure you want to buy this?\n1. Yes \n2. No")
                if (Confirm == 1) {
                    Currency -= Items[InvStore[UserInput]]['Price'] * Many;
                    AddToInventory(InvStore[UserInput], Many);
                    alert("Store Owner:\nThank you for your purchase.")
                    RefreshUI();
                }
                else {
                    alert("Store Owner: \nYou forget you wallet? Yeah like I haven't heard that one before.")
                    Buy();
                }
            }
            else {
                alert("Store Owner: \nGet your broke a$$ outta here!")
            }
        }
        else {
            alert("Store Owner: \nUmmm... Where are your parents?")
        }
    }
    else {
        alert("Store Owner: \nThank you. Come again!")
    }
}

function Sell() { //Done
    var text = ""
    var i;

    for (i = 0; i < InvIndex.length; i++) {
        text += (i + 1) + ". " + Items[InvIndex[i]]['Name'] + " - $" + Items[InvIndex[i]]['Price'] + "\n"
    }
    UserInput = prompt("Store Owner: \nWhat have you got form me today?\n \n" + text) -
        1;
    if (UserInput < InvIndex.length && UserInput >= 0) {
        var Many = prompt("Store Owner: \nHow many do you want to sell", 1)
        if (Many > 0 && Many <= InvQuantity[UserInput]) {
            var Confirm = prompt(Items[InvIndex[UserInput]]['Name'] + " - $" + (Items[InvIndex[UserInput]]['Price'] * Many) + "\n" + Items[InvIndex[UserInput]]['Desc'] + "\n\n Store Owner: \nAre you sure you want to sell this?\n1. Yes \n2. No");
            if (Confirm == 1) {
                Currency += Items[InvIndex[UserInput]]['Price'] * Many;
                RemoveToInventory(UserInput, Many);
                alert("Store Owner: \nPleasure doing buisness with you!")
                RefreshUI();
            }
            else {
                alert("Store Owner: \nDamn. I really wanted that one.")
                Sell();
            }
        }
        else if (Many >= InvQuantity[UserInput]) {
            alert("Store Owner:\n" + Many + "!! you know you ain't got that many!")
            Sell();
        }
        else {
            alert("Store Owner: \nDo you need anything? Sir.")
        }
    }
    else {
        alert("Store Owner: \nThank you. Come again!")
    }
}

//Inventory Functions
function AddToInventory(Item, Plus) {//Done
    var i;
    var Exists = false;
    for (i = 0; i < InvIndex.length; i++) {
        if (InvIndex[i] == Item) {
            InvQuantity[i] = (parseInt(InvQuantity[i]) + parseInt(Plus))
            Exists = true;
        }
    }
    if (Exists == false) {
        InvIndex.push(Item);
        InvQuantity.push(Plus);
    }
    RefreshUI();
}

function RemoveToInventory(Item, Minus) {//Done
    InvQuantity[Item] = (parseInt(InvQuantity[Item]) - parseInt(Minus))
    if (InvQuantity[Item] < 1) {
        InvIndex.splice(Item);
        InvQuantity.splice(Item);
    }
    RefreshUI();
}

function UseItem() {//Done
    var inventory_buffer = "Use an Item? \n";
    for (i = 0; i < InvIndex.length; i++) {
        inventory_buffer += (i + 1) + ". " + Items[InvIndex[i]]['Name'] + " (" + InvQuantity[i] + ")\n";
    }
    if (InvIndex.length == 0) {
        alert("Your inventory is empty!")
    }
    else {
        var Choose = prompt(inventory_buffer) - 1
    }

    switch (Items[InvIndex[Choose]]['Name']) {
        case "Hot Pocket":
            alert(People[0]['Name'] + " ate a Hot Pocket. It was very tasty")
            People[0]['HealthCurrent'] += 10
            RemoveToInventory(Choose, 1)
            break;

        case "Maruchan Ramen":
            alert(People[0]['Name'] + " ate the soup. It was very tasty")
            People[0]['HealthCurrent'] += 20
            RemoveToInventory(Choose, 1)
            break;

        case "New TV Remote":
            alert(People[0]['Name'] + " used the TV Remote")
            if (Opponent == 12) {
                alert("You her turned off ")
                People[Opponent]['HealthCurrent'] = 0
            }
            else {
                alert("But nothing happend")
            }
            RemoveToInventory(Choose, 1)
            break;

        case "BackScraterenator 3000":
            alert(People[0]['Name'] + " scratched back! feels good! It even restored some health.")
            People[0]['HealthCurrent'] += 12
            RemoveToInventory(Choose, 1)
            break;

        case "Caleb":
            alert(People[0]['Name'] + " used Caleb. Your roof has is fixed! You felt so relaxed it restored some health.")
            People[0]['HealthCurrent'] += 10
            RemoveToInventory(Choose, 1)
            break;

        case "Rosetta Stone":
            alert(People[0]['Name'] + " used the power of the rosetta stone")
            alert("You leveled up!")
            People[0]['Level']++
            RemoveToInventory(Choose, 1)
            break;

        case "Rusty Sword":
            alert(People[0]['Name'] + " used a rusty sword. It's not a stong as you thought")
            People[Opponent]['HealthCurrent'] -= 10
            RemoveToInventory(Choose, 1)
            break;

        case "Plastic shield":
            alert(People[0]['Name'] + " shield is used. It's probably not going to help, but you feel a little bit safer")
            //People[0]['HealthCurrent'] += 2
            RemoveToInventory(Choose, 1)
            break;

        case "Wooden shield":
            alert(People[0]['Name'] + " shield is used. It's probably not going to help, but you feel a little bit safer")
            //Levels[People[0]['Level']]['Defense'] += 2
            RemoveToInventory(Choose, 1)
            break;

        case "Spork":
            alert(People[0]['Name'] + " good job normie!")
            //People[0]['HealthCurrent'] += 70
            RemoveToInventory(Choose, 1)
            break;
    }
    RefreshUI();
}

//Job Functions
function JobOptions() { //Done
    function Apply() { //Done
        var i;
        var text = "";
        for (i = 1; i < Jobs.length; i++) {
            text += i + ". " + Jobs[i]['Job'] + "\n"
        };
        var UserInput = prompt(People[0]['Name'] + ": \nWhat job do I want to apply for?\n" + text + i + ". Cancel");
        if (UserInput >= 1 && UserInput < i) {
            var Confirm = prompt(People[0]['Name'] + ": \nMy chance of getting a job at " + Jobs[UserInput]['Job'] + " is about " + Jobs[UserInput]['Chance'] + " percent.\n\n Am I sure I want to apply?\n1. Yes\n2. No");
            if (Confirm == 1) {
                var Random = Math.floor(Math.random() * 101);
                if (Jobs[UserInput]['Chance'] > Random) {
                    UserJob = UserInput;
                    alert(People[0]['Name'] + ": \nI got the job!")
                } else {
                    alert(People[0]['Name'] + ": \nThese losers don't see talent when it's right in front of them!")
                }
                IncrementDay();
                RefreshUI()
            }
            else {
                alert(People[0]['Name'] + ": \nWhatever. It's not like I wanted to work there.")
                Apply()
            }
        }
        else {
            alert(People[0]['Name'] + ": \nPfffft! Who needs work anyways?")
        }
    }

    function Resign() { //Done
        UserInput = prompt(People[0]['Name'] + ": \nDo I really want to quit my " + Jobs[UserJob]['Job'] + " job?\n1. Yes\n2. No")
        if (UserInput == 1) {
            alert("You quit your job at " + Jobs[UserJob]['Job']);
            UserJob = 0;
            IncrementDay();
            RefreshUI();
        }
        else if (UserInput == 2) {
            alert(People[0]['Name'] + ": \nYeah, I think I'm set.")
        }
        else {
            alert(People[0]['Name'] + ":\nTo work or to not work. Hmmmmm...")
        }
    }

    function Intern() { //Done
        var i;
        text = "";
        for (i = 1; i < Jobs.length; i++) {
            text += i + ". " + Jobs[i]['Job'] + "\n"
        }
        UserInput = prompt(People[0]['Name'] + ": \nWhere do I want to Intern? \n" + text);
        if (UserInput >= 1 && UserInput < i) {
            var Confirm = prompt(People[0]['Name'] + ": \nIf I intern at " + Jobs[UserInput]['Job'] + " it will raise your chances of getting in by 3 percent I think. However it will take the next 7 days. \n\nShould I do it?\n1. Yes\n2. No");
            if (Confirm == 1) {
                Jobs[UserInput]['Chance'] += 3;
                alert(People[0]['Name'] + " interned for " + Jobs[UserInput]['Job'] + " for the next week\nYour chance of getting that job next time is now " + Jobs[UserInput]['Chance'] + " Percent");
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
            }
            else {
                alert(People[0]['Name'] + ":\nKinda busy right now, maybe later...")
            }
        }
        else {
            alert(People[0]['Name'] + ": \nI think I left my stove on at home...")
        }
    }

    if (UserJob == 0) {
        UserInput = prompt(People[0]['Name'] + ": \nWhat to do?\n1. Find Work \n2. Get Internship");
        if (UserInput == 1) {
            Apply()
        } else if (UserInput == 2) {
            Intern()
        } else {
            alert(People[0]['Name'] + ": \nWho needs work anyways...")
        }
    }
    else {
        UserInput = prompt(People[0]['Name'] + ": \nWhat to do?\n1. Quit Current Job");
        if (UserInput == 1) {
            Resign()
        } else {
            alert(People[0]['Name'] + ": \nI like my job thank you very much")
        }
    }
}

//Payment Functions
function PayBills() {//Done
    function Excuse(Amount, Reason) {
        this.Amount = Amount
        this.Reason = Reason
        this.FullExcuse = Reason + "\nYou spent $" + Amount
    }
    var Excuses = [
        new Excuse(215, "I hope I have enough to pay the water bill."),
        new Excuse(370, "I have to pay the gas and electric."),
        new Excuse(100, "I have to get clothes and food for that party that everybody is talking about."),
        new Excuse(0, "No bills to pay?! Is a storm coming?"),
        new Excuse(250, "Today, I'm going to by 50 Maruchan Ramen, just because."),
        new Excuse(300, "That truck isn't going to fix itself."),
        new Excuse(90, "Phone bills are such a pain in the ass"),
        new Excuse(25, "I need to renew my world of warcraft subscription")
    ]
    var RandomExcuse = Math.floor(Math.random() * 8)
    alert(People[0]['Name'] + ": \n" + Excuses[RandomExcuse]['FullExcuse']);
    Currency -= Excuses[RandomExcuse]['Amount'];
}

function PayDay() {//Done
    if (UserJob == 0) {
        alert(People[0]['Name'] + ": \nNothing to worry about my parents still love me. They sent 50 bucks!")
    }
    if (UserJob > 0) {
        Currency += Jobs[UserJob]['Salary']
        alert(People[0]['Name'] + ": \nI earned $" + Jobs[UserJob]['Salary'] + " from my job at " + Jobs[UserJob]['Job']);
    }
}

//TimeFunctions
function IncrementDay() {//Done
    Day365++;

    //Get Paid and Pay Bills
    if (Day365 % 7 == 6) {
        PayDay();
    }
    if (Day365 % 14 == 13) {
        PayBills();
    }
    if (Math.floor(Math.random() * 100) + 1 <= 10) {
        PayBills();
    }

    if (Math.floor(Math.random() * 100) + 1 <= 20) {
        RandomEncounter();
    }

    //Set Month
    var p;
    for (i = 0; i < 12; i++) {
        if (Day365 >= FirstInMonth[i] && Day365 <= DaysInMonth[i] + FirstInMonth[i] - 1) {
            Month = i;
        }
    }

    //Set Day out of month
    DayMonth = Day365;
    for (i = 0; i <= Month; i++) {
        DayMonth -= DaysInMonth[i]
    }
    DayMonth += DaysInMonth[Month]

    //Set weekday
    DayWeek = Day365 % 7

    //ResetYear
    if (Day365 > 365) {
        Day365 = 0;
        Year++;
        IncrementDay();
    }
    RefreshUI();
}

//Combat
function RandomEncounter() {//Done
    //Resets NPC's
    var RandomLevel = People[0]['Level'] + Math.floor(Math.random() * 4) - 2;
    if (RandomLevel < 1) {
        RandomLevel = 1;
    }
    People = [ //Note User is always index 0
        People[0],
        new CharacterInfo("Fest", "Male", RandomLevel, 1, [0, 1, 2, 3]),
        new CharacterInfo("Swift", "Male", RandomLevel, 2, [0, 1, 2, 3]),
        new CharacterInfo("Roush", "Female", RandomLevel, 3, [0, 1, 2, 3]),
        new CharacterInfo("Grub", "Male", RandomLevel, 4, [0, 1, 2, 3]),
        new CharacterInfo("Anvil", "Male", RandomLevel, 5, [0, 1, 2, 3]),
        new CharacterInfo("Applesauce", "Unknown", RandomLevel, 6, [0, 1, 2, 3]),
        new CharacterInfo("Slate", "Female", RandomLevel, 7, [0, 1, 2, 3]),
        new CharacterInfo("Grease", "Female", RandomLevel, 8, [0, 1, 2, 3]),
        new CharacterInfo("Boxtroll", "Alpha Male", RandomLevel, 9, [0, 1, 2, 3]),
        new CharacterInfo("Bling King", "Male", RandomLevel, 10, [0, 1, 2, 3]),
        new CharacterInfo("Lenses", "Male", RandomLevel, 11, [0, 1, 2, 3]),
        new CharacterInfo("Dummy", "Female", RandomLevel, 12, [0, 1, 2, 3]),
        new CharacterInfo("MY LEG!", "Male", RandomLevel, 13, [0, 1, 2, 3]),
        new CharacterInfo("Ghost", "Male", RandomLevel, 14, [0, 1, 2, 3]),
        new CharacterInfo("Whoosh", "Male", RandomLevel, 15, [0, 1, 2, 3]),
        new CharacterInfo("Flop", "Male", RandomLevel, 16, [0, 1, 2, 3]),
        new CharacterInfo("Fish", "Female", RandomLevel, 17, [0, 1, 2, 3]),
        new CharacterInfo("Thicc", "Male", RandomLevel, 18, [0, 1, 2, 3]),
        new CharacterInfo("4-eyes", "Female", RandomLevel, 19, [0, 1, 2, 3])
    ];
    Opponent = Math.floor(Math.random() * 19) + 1;

    if (People[0]['Icon'] == People[Opponent]['Icon']) {
        People[Opponent]['Icon'] = ProfilePics[0];
    }
    alert("A wild " + People[Opponent]['Name'] + " has appeared.")
    Gamemode = "Battle";
    RefreshUI();
}

function Fight() {//Done
    var text = "";
    for (i = 0; i < 4; i++) {
        text += (i + 1) + ". " + Attacks[People[0]['Move'][i]]['Name'] + "\n"
    }
    var UserInput = prompt(text) - 1;
    if (UserInput >= 0 && UserInput < 4) {

        //If your opponent is faster
        if (Levels[People[Opponent]['Level']]['Speed'] > Levels[People[0]['Level']]['Speed']) {
            UseAttack(Opponent, 0, 0); //Opponent attacks
            if (People[0]['HealthCurrent'] > 0) { //If you survived
                UseAttack(0, Opponent, UserInput);
                if (People[Opponent]['HealthCurrent'] < 0) {
                    alert(People[Opponent]['Name'] + " Died...");
                    EndBattle();
                }
            }
            else { //You didn't survive
                alert("You Died...");
                EndBattle();
            }
        }
        //If you are faster
        else if (Levels[People[Opponent]['Level']]['Speed'] < Levels[People[0]['Level']]['Speed']) {
            UseAttack(0, Opponent, UserInput);
            if (People[Opponent]['HealthCurrent'] > 0) { //If you opponent survived
                UseAttack(Opponent, 0, 0); //Opponent attacks
                if (People[0]['HealthCurrent'] < 0) {
                    alert("You Died...");
                    EndBattle();
                }
            }
            else { //Your Opponent didn't survive
                alert(People[Opponent]['Name'] + " Died...")
                EndBattle();
            }
        }
        //If you and your opponents speed is equal
        else if (Levels[People[Opponent]['Level']]['Speed'] == Levels[People[0]['Level']]['Speed']) {
            if (Math.random() <= .5) {
                UseAttack(Opponent, 0, 0); //Opponent attacks
                if (People[0]['HealthCurrent'] > 0) { //If you survived
                    UseAttack(0, Opponent, UserInput);
                    if (People[Opponent]['HealthCurrent'] < 0) {
                        alert(People[Opponent]['Name'] + " Died...");
                        EndBattle();
                    }
                }
                else { //You didn't survive
                    alert("You Died...");
                    EndBattle();
                }
            }
            else {
                UseAttack(0, Opponent, UserInput);
                if (People[Opponent]['HealthCurrent'] > 0) { //If you opponent survived
                    UseAttack(Opponent, 0, 0); //Opponent attacks
                    if (People[0]['HealthCurrent'] < 0) {
                        alert("You Died...");
                        EndBattle();
                    }
                }
                else { //Your Opponent didn't survive
                    alert(People[Opponent]['Name'] + " Died...")
                    EndBattle();
                }
            }
        }
        RefreshUI();
    }
}

function Bag() {//Done
    UseItem();
    if (People[Opponent]['HealthCurrent'] > 0) { //If you opponent survived
        UseAttack(Opponent, 0, 0); //Opponent attacks
    }
    else {
        alert(People[Opponent]['Name'] + " Died...")
        EndBattle();
    }
    RefreshUI();
}

function Run() {//Done
    if (Math.random() <= .33) {
        alert("You got away safely")
        Gamemode = "Standard";
        RefreshUI();
    }
    else {
        alert("You couldn't get away")
        UseAttack(Opponent, 0, 0); //Opponent attacks
        if (People[0]['HealthCurrent'] < 0) {
            alert("You Died...")
            EndBattle();
        }
    }
    RefreshUI();
}

function EndBattle() {
    //if you opponent died
    if (People[Opponent]['HealthCurrent'] < 1) {
        //Gives EXP
        alert("You got " + People[Opponent]['Level'] + " Experience")
        People[0]['ExperienceCurrent'] += People[Opponent]['Level'];

        var PrizeMoney = Math.floor(Math.random() * 100) + 100;
        Currency += PrizeMoney;
        alert("You stole $" + PrizeMoney + " from " + People[Opponent]['Name'])
    }

    //if you died
    else if (People[0]['HealthCurrent'] < 1) {
        People[0]['HealthCurrent'] = Levels[People[0]['Level']]['Health'];
        IncrementDay();

        Currency -= 1000;
        alert("This is for your hopital bills \nCurrency -$1000");
    }
    Gamemode = "Standard";
    RefreshUI();
}

function DamageCalc(Perpetrator, Victim, Attack) {//Done
    var Random = (Math.floor(Math.random() * 30) + 85) / 100;
    var Critical = 1;
    if (Math.floor(Math.random() * 100) + 1 <= 10) {
        Critical = 2;
        alert("It's a critical hit! That's alotta damage!")
    }
    return Math.floor(((2 * People[Perpetrator]['Level'] / 5 + 2) * Attacks[Attack]['Power'] * Levels[People[Perpetrator]['Level']]['Attack'] / Levels[People[Victim]['Level']]['Defense'] / 30 / 50 + 2) * Random) * Critical;
}

function UseAttack(Perpetrator, Victim, Attack) {//Done
    if (Perpetrator != 0) {
        var Attack = Math.floor(Math.random() * 4)
    }
    alert(People[Perpetrator]['Name'] + " used " + Attacks[Attack]['Name'])


    var MissedChance = Math.floor(Math.random() * 100) + 1;
    if (MissedChance <= Attacks[Attack]['Accuracy']) {
        alert(People[Perpetrator]['Name'] + " missed, What a dumbass!")
    }

    else {
        //Attacks
        switch (Attacks[Attack]['Name']) {
            case "Tackle":
                People[Victim]['HealthCurrent'] -= DamageCalc(Perpetrator, Victim, People[Perpetrator]['Move'][Attack]);
                break;

            case "BulletPunch":
                People[Victim]['HealthCurrent'] -= DamageCalc(Perpetrator, Victim, People[Perpetrator]['Move'][Attack]);
                break;

            case "SuperKick":
                People[Victim]['HealthCurrent'] -= DamageCalc(Perpetrator, Victim, People[Perpetrator]['Move'][Attack]);
                break;

            case "Bash":
                People[Victim]['HealthCurrent'] -= DamageCalc(Perpetrator, Victim, People[Perpetrator]['Move'][Attack]);
                break;
        }
    }


    //(People[Opponent], People[0], Random)
}

//Cheats
function Cheats() {
    var Password = prompt("Whats the password?").toLowerCase();
    if (Password == "it's free real estate") {
        var Cheat = prompt("Enter Cheat Code...").toLowerCase();
        switch (Cheat) {
            case "money":
                Currency = 1000000;
                alert("Money = 1000000")
                break;

            case "level":
                People[0]['Level'] = 10;
                alert("Level = 10")
                break;

            case "items":
                InvIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                InvQuantity = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
                alert("Inventory = STACKED AF")
                break;

            case "time":
                Day365 = 1;
                alert("Day = 01 January")
                break;

            case "mii":
                alert("Resetting Appearence...")
                StartUp();
                break;

            default:
                alert("Not Valid.")
                break;
        }
    }
    else {
        alert("Error, Wrong password")
    }
    RefreshUI();
}

//Gets the player information ready for the rest of the game
function StartUp() {//Done
    do {
        People[0]['Name'] = prompt("What's your name?");
    }
    while (!People[0]["Name"]);
    while (Gender != 1 && Gender != 2) {
        var Gender = prompt("What is your gender? \n1. Male \n2. Female \n3. Other");
        if (Gender == 3) {
            alert("Don't be silly, there are no other genders")
        }
        if (!Gender) {
            alert("We have a shy one. Kinky!")
        }
    }
    if (Gender == 1) {
        People[0]['Gender'] = "Male"
    }
    else if (Gender == 2) {
        People[0]['Gender'] = "Female"
    }
    while (UserInput < 0 || UserInput > 19 || UserInput == undefined) {
        var UserInput = prompt("I want to look like a...\n1. Sponge \n2. Squid \n3. Star \n4. Squirrel \n5. Krab \n6. Plankton.jpg \n7. Snail \n8. PufferFish \n9. Whale \n10. Fancy Squid \n11.King \n12. Lobster \n13. Computer \n14. Weakling \n15. Ghost \n16. Parrot \n17. Fish \n18. Grandma \n19. Retired SideKick \n20. Retired Hero") - 1;
        if (UserInput >= 0 && UserInput < 20) {
            People[0]['Icon'] = ProfilePics[UserInput];
        }
    }
}


// MAIN program execution
StartUp();
RefreshUI();