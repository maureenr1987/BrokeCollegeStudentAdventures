
// COMMENTS SECTION
/* 
Programmer: Mauricio, John, Jaiden, Jayson, and Luis
Date Last Modified: 11/08/2018
Goal/Purpose: Make a presentable MTAG
Status: in Progress

Checklist:
Add Calendar 
Add Months
Add more/different items to the store (More that relate to the game in progress
Come up with a story with different (random) endings
Add name, age, ect. from user at beginning

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


//Battle
var Opponent = 5

//Attacks
function AttackInfo(Name, Accuracy, Power, PP) {
    this.Name = Name
    this.Accuracy = Accuracy
    this.Power = Power
    this.pp = PP
}
var Attacks = [
    new AttackInfo("Tackle", 40, 100, 35),
    new AttackInfo("BulletPunch", 50, 95, 30),
    new AttackInfo("SuperKick", 90, 70, 10),
    new AttackInfo("Bash", 80, 80, 10)
]

//Levels
function Level(HTH, ATK, DEF, SPD, EXP) {
    this.Health = HTH
    this.Attack = ATK
    this.Defense = DEF
    this.Speed = SPD
    this.Experience = EXP
}
var Levels = [
    new Level(0, 0, 0, 0, 10), //Placeholder 0
    new Level(10, 5, 5, 5, 20),
    new Level(12, 6, 6, 6, 30),
    new Level(14, 7, 7, 7, 40),
    new Level(18, 8, 8, 8, 50),
    new Level(20, 9, 9, 9, 60), //Level 5
    new Level(22, 10, 10, 10, 70),
    new Level(24, 11, 11, 11, 80),
    new Level(26, 12, 12, 12, 90),
    new Level(28, 13, 13, 13, 100),
    new Level(30, 14, 14, 14, 110), //Level 10
    new Level(32, 15, 15, 15, 120),
    new Level(34, 16, 16, 16, 130),
    new Level(36, 17, 17, 17, 140),
];

//Characters
function CharacterInfo(Name, Gender, Level, Icon, Moves) {
    this.Name = Name
    this.Gender = Gender
    this.Level = Level
    this.Icon = Icon
    this.HealthCurrent = Levels[Level]['Health']
    this.ExperienceCurrent = 0
    this.Move = Moves
    var MovesPP = [];
    for (i = 0; i < 4; i++) {
        if ( Moves[i] != null )
        MovesPP.push(Attacks[Moves[i]]['pp'])
    }
    this.MovesPP = MovesPP
}
var UserCharacterInfo = new CharacterInfo("Yeah", "Male", 5, "src/Sponge.jpg", [0, 1, 2, 3]);
var People = [
    new CharacterInfo("Fest", "Male", 2, "src/Squid.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Swift", "Male", 3, "src/Patrick.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Roush", "Female", 4, "src/Sandy.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Grub", "Male", 5, "src/Krab.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Anvil", "Male", 6, "src/Plankton.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Redpop", "Unknown", 7, "src/Gary.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Slate", "Female", 8, "src/Puff.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Grease", "Female", 9, "src/Whale.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Septa", "Alpha Male", 10, "src/Squid2.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Tambo", "Male", 11, "src/King.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Lenses", "Male", 12, "src/Lobster.jpg", [0, 1, 2, 3]),
    new CharacterInfo("Dummy", "Female", 13, "src/Computer.jpg", [0, 1, 2, 3]),
]


//Items
function ItemInfo(Name, Price, Desc) {
    this.Name = Name
    this.Price = Price
    this.Desc = Desc
}
var Items = [
    new ItemInfo("Hot Pocket", 2, "Need a delicious and satisfying snack? Hot Pockets® brand sandwiches are made with quality ingredients to deliver delicious taste and big flavor. +5 health"),
    new ItemInfo("Maruchan Ramen", 5, "The Maruchan ramen is a very popular brand of noodles in the United-States. +15 health"),
    new ItemInfo("New TV Remote", 20, "Infrared All in One Remote Control. I guess you could throw it at somebdy? +5 attack"),
    new ItemInfo("BackScraterenator 3000", 60, "This handy telescopic back scratcher features a comfortable cushion grip handle and a bear paw shaped metal claw. Use it to poke people, it probably hurts. +15 attack"),
    new ItemInfo("Caleb", 250, "If you feed him 25 cents, he'll fix your roof. +10 to max health because I didn't know what else to do with him"),
    new ItemInfo("Rosetta Stone", 10000, "REEEEEEEEEEEEEEET. Good luck trying to afford it"),
    new ItemInfo("Rusty Sword", 100, "I found this in the dumpster out back so now im gonna sell it to you and make a huge profit. +30 attack"),
    new ItemInfo("Plastic shield", 20, "Here's this shield I stole from my neighbors kid. +5 defense"),
    new ItemInfo("Wooden shield", 50, "This state of the art sheid was made with some drift wood that I found. It's not my problem if it breaks. +15 defense"),
    new ItemInfo("Spork", 100, "Spork, now with 40% more spoon. Heals you fully")
]

//Employment
function JobInfo(Job, Salary, Chance) {
    this.Job = Job
    this.Salary = Salary
    this.Chance = Chance
}
var Jobs = [
    new JobInfo("Unemployed", 0, 100),
    new JobInfo("McDonalds", 250, 60),
    new JobInfo("Waiter", (Math.floor(Math.random() * 200) + 200), 45),
    new JobInfo("Nurse", 400, 30),
    new JobInfo("FactoryWorker", 500, 20),
    new JobInfo("Scientist", 800, 3)
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
    //Users Name and Gender
    document.getElementById("display_username").innerHTML = UserCharacterInfo['Name'];
    document.getElementById("display_usergender").innerHTML = "Gender: " + UserCharacterInfo['Gender']

    // Update users job
    document.getElementById("display_userjobinfo").innerHTML = "Job: " + Jobs[UserJob]['Job'];

    // Update Currency
    document.getElementById("display_usercurrency").innerHTML = "Currency: $" + Currency;

    // Change Currency Color
    document.getElementById("display_usercurrency").style.color = (Currency <= 0 ? "red" : "white");

    // Update Inventory
    var inventory_buffer = "";
    for (i = 0; i < InvIndex.length; i++) {
        inventory_buffer += Items[InvIndex[i]]['Name'] + " (" + InvQuantity[i] + ")<br>";
    }
    if (InvIndex.length == 0) {
        document.getElementById("display_inventory").innerHTML = "Your inventory is empty!";
    } else {
        document.getElementById("display_inventory").innerHTML = inventory_buffer;
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
    document.getElementById("display_userstats").innerHTML = "Level - " + UserCharacterInfo['Level'] + "<br>HP - " + UserCharacterInfo['HealthCurrent'] + " / " + Levels[UserCharacterInfo['Level']]['Health'] + "<br>ATK - " + Levels[UserCharacterInfo['Level']]['Attack'] + "<br>DEF - " + Levels[UserCharacterInfo['Level']]['Defense'] + "<br>SPD - " + Levels[UserCharacterInfo['Level']]['Speed']

    //NPCRefresh
    document.getElementById("display_NPCname").innerHTML = People[Opponent]['Name']
    document.getElementById("display_NPCgender").innerHTML = "Gender: " + People[Opponent]['Gender']
    document.getElementById("display_NPCStats").innerHTML = "Level - " + People[Opponent]['Level'] + "<br>HP - " + People[Opponent]['HealthCurrent'] + " / " + Levels[People[Opponent]['Level']]['Health'] 
    document.getElementById("NPCIcon").src = People[Opponent]['Icon']
}

//Store Functions
function OpenStore() {//Done
    var UserInput = prompt("Store Owner: Hi how you doing? What do you need today\n \n1. Buy\n2. Sell\n3. Exit");
    if (UserInput == 1) {
        Buy()
    } else if (UserInput == 2) {
        Sell()
    } else {
        alert("Uhh. Have a nice day?")
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
    UserInput = prompt("Choose anything you like. \n \n" + text + (InvStore.length + 1) + ". Exit") - 1;
    if (UserInput < InvStore.length && UserInput >= 0) {
        var Many = prompt("How many do you want to buy", 1)
        if (Many > 0 && Many <= 1000) {
            if (Currency < Items[InvStore[UserInput]]['Price'] * Many) {
                alert("Honey you br0k3 AF.")
            } else {
                var Confirm = prompt(Items[InvStore[UserInput]]['Name'] + " x" + Many + " - $" + (Items[
                    InvStore[UserInput]]['Price'] * Many) + "\n" + Items[InvStore[UserInput]]['Desc'] +
                    "\n\nAre you sure you want to buy this?\n1. Yes \n2. No")
                if (Confirm == 1) {
                    Currency -= Items[InvStore[UserInput]]['Price'] * Many;
                    AddToInventory(InvStore[UserInput], Many);
                    alert("Thank you for your purchase.")
                    RefreshUI();
                } else {
                    Buy();
                }
            }
        } else {
            alert("Ummm... Where are your parents?")
        }
    } else if (UserInput == i) {
        alert("Thank you. Come again!")
    }
}

function Sell() { //Done
    var text = ""
    var i;

    for (i = 0; i < InvIndex.length; i++) {
        text += (i + 1) + ". " + Items[InvIndex[i]]['Name'] + " - $" + Items[InvIndex[i]]['Price'] + "\n"
    }
    UserInput = prompt("Type in an items number to Sell it \n \n" + text + (InvIndex.length + 1) + ". Exit") -
        1;
    if (UserInput < InvIndex.length && UserInput >= 0) {
        var Many = prompt("How many do you want to sell", 1)
        if (Many > 0 && Many <= InvQuantity[UserInput]) {
            var Confirm = prompt(Items[InvIndex[UserInput]]['Name'] + " - $" + (Items[InvIndex[UserInput]][
                'Price'
            ] * Many) + "\n" + Items[InvIndex[UserInput]]['Desc'] +
                "\n\nAre you sure you want to sell this?\n1. Yes \n2. No")
            if (Confirm == 1) {
                Currency += Items[InvIndex[UserInput]]['Price'] * Many;
                RemoveToInventory(UserInput, Many);
                alert("Uhhh. Thanks...")
                RefreshUI();
            } else if (Confirm == 2) {
                Sell();
            }
        } else if (Many >= InvQuantity[UserInput]) {
            alert("Boi! You know you ain't got that many!")
        }
    } else if (UserInput == i) {
        alert("Thank you. Come again!")
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

function PayDay() {//Done
    function Excuse(Amount, Reason) {
        this.Amount = Amount
        this.Reason = Reason
        this.FullExcuse = Reason + "\nSpendings: " + Amount
    }

    var Excuses = [
        new Excuse(215, "I hope I have enough to pay the water bill."),
        new Excuse(370, "This week I have to pay the gas and electric."),
        new Excuse(100, "I have to get clothes and food for that party that everybody is talking about."),
        new Excuse(0, "What?! A week with no expenses! Is a storm coming?"),
        new Excuse(500, "I have to buy food fo the whole month, because i'm too lazy to go every week"),
        new Excuse(300, "That truck isn't going to fix itself."),
        new Excuse(90, "Phone bills are such a pain in the arse")
    ]
    var RandomExcuse = Math.floor(Math.random() * 7)

    if (UserJob == 0) {
        alert("And this is the day that you would've gotten paid... IF YOU HAD A JOB!")
    } else {
        Currency += Jobs[UserJob]['Salary']
    }

    Currency -= Excuses[RandomExcuse]['Amount'];

    alert(Excuses[RandomExcuse]['FullExcuse']);
    alert("You earned " + Jobs[UserJob]['Salary'] + " from your job at " + Jobs[UserJob]['Job']);
}

//Job Functions
function JobOptions() { //Done
    function Apply() { //Done
        var i;
        var text = "";

        if (UserJob > 1) {
            alert("You already have a job")
        } else {
            for (i = 1; i < Jobs.length; i++) {
                text += i + ". " + Jobs[i]['Job'] + "\n"
            };
            var UserInput = prompt("Where do you want to apply?\n" + text + i + ". Cancel");
            if (UserInput >= 1 && UserInput < i) {
                var Confirm = prompt("Yor chance of getting a job at " + Jobs[UserInput]['Job'] + " is about " +
                    Jobs[UserInput]['Chance'] +
                    " percent.\n\n Are you sure you want to apply?\n1. Yes\n2. No");
                if (Confirm == 1) {
                    var Random = Math.floor(Math.random() * 101);
                    if (Jobs[UserInput]['Chance'] > Random) {
                        UserJob = UserInput;
                        alert("You got the job!")
                    } else {
                        alert("These losers don't see talent when it's right in front of them!")
                    }
                    IncrementDay();
                    RefreshUI()
                } else {
                    alert("Whatever. It's not like I wanted to work there.")
                    Apply()
                }
            } else {
                alert("Pfffft! Who needs work anyways?")
            }
        }
    }

    function Resign() { //Done
        if (UserJob == 0) {
            alert("You cant get fired if you don't have a job!")
        } else {
            UserInput = prompt("Are you sure you want to quit your " + Jobs[UserJob]['Job'] +
                " job?\n1. Yes\n2. No")
            if (UserInput == 1) {
                UserJob = 0;
                IncrementDay();
                RefreshUI();
            }
        }
    }

    function Intern() { //Done
        var i;
        text = "";
        for (i = 1; i < Jobs.length; i++) {
            text += i + ". " + Jobs[i]['Job'] + "\n"
        }
        if (UserJob == 0) {
            UserInput = prompt("Where do you want to Intern?\n" + text + i + ". Cancel");
            if (UserInput >= 1 && UserInput < i) {
                var Confirm = prompt("If you intern at " + Jobs[UserInput]['Job'] +
                    " it will raise your chances of getting in by 5 percent, however it will take the rest of the day. \n\nIs this ok?\n1. Yes\n2. No"
                );
                if (Confirm == 1) {
                    Jobs[UserInput]['Chance'] += 5;
                    alert("You interned for " + Jobs[UserInput]['Job'] +
                        " for the rest of the day\nYour chance of getting that job next time is now " +
                        Jobs[UserInput]['Chance'] + " Percent");
                    IncrementDay();
                    RefreshUI();
                } else {
                    alert("Kinda busy right now, maybe later...")
                }
            } else {
                alert("Is there an internship for videogames?")
            }
        } else {
            alert("You already have a job. Quit your current job if you want to intern")
        }
    }

    if (UserJob == 0) {
        UserInput = prompt("What to do?\n\n1. Find Work \n2. Get Internship");
        if (UserInput == 1) {
            Apply()
        } else if (UserInput == 2) {
            Intern()
        } else {
            alert("Quit wasting my time then.")
        }
    } else {
        UserInput = prompt("What to do?\n1. Quit Current Job");
        if (UserInput == 1) {
            Resign()
        } else {
            alert("Quit wasting my time then.")
        }
    }
}

//TimeFunctions
function IncrementDay() {//Done
    Day365++;

    //Get Paid and Pay Bills
    if (Day365 % 7 == 6) {
        PayDay();
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
function StartBattle() {//Needs Fix
    Opponent = Math.floor(Math.random() * 12)
    RefreshUI();
}

function DamageCalc (Perpetrator, Victim, Attack){//Needs Fix
    return Math.floor ((( 2 * Perpetrator['Level']  / 5 + 2 ) * Attacks[Attack]['Power'] * Levels[Perpetrator['Level']]['Attack'] / Levels[Victim['Level']]['Defense'] / 30 /50 + 2 ) * (300 / (Math.floor(Math.random() * 15 ) + 85))) ;
}

function Fight() {//Needs Fix
    var text = "";
    for (i = 0; i < 4; i++) {
        text += (i + 1) + ". " + Attacks[UserCharacterInfo ['Move'][i]]['Name'] + "\n"
    }

    var UserInput = prompt(text) - 1;
    var Random = Math.floor(Math.random()*4)
    if ( Levels[People[Opponent]['Level']]['Speed'] > Levels[UserCharacterInfo['Level']]['Speed'] ) { //If your opponent is faster
        
        alert( People[Opponent]['Name'] + " Used " + Attacks[Random]['Name'] )
        UserCharacterInfo['HealthCurrent'] -= DamageCalc( People[Opponent], UserCharacterInfo, Random );

        if ( UserCharacterInfo['HealthCurrent'] > 0 ) { //If you survived
            alert( UserCharacterInfo['Name'] + " used " + Attacks[UserInput]['Name'] )
            People[Opponent]['HealthCurrent'] -= DamageCalc( UserCharacterInfo, People[Opponent], UserInput );
        }
        else { //You didn't survive
            alert("You Died...")
        }
    }
    else if ( Levels[People[Opponent]['Level']]['Speed'] <= Levels[UserCharacterInfo['Level']]['Speed'] ) { //If your opponent is slower
        alert( UserCharacterInfo['Name'] + " used " + Attacks[UserInput]['Name'] )
        People[Opponent]['HealthCurrent'] -= DamageCalc( UserCharacterInfo, People[Opponent], UserInput );

        if ( People[Opponent]['HealthCurrent'] > 0 ) { //If you opponent survived
            alert( People[Opponent]['Name'] + " Used " + Attacks[Random]['Name'] )
        UserCharacterInfo['HealthCurrent'] -= DamageCalc( People[Opponent], UserCharacterInfo, Random );
        }
        else { //Your Opponent didn't survive
            alert( People[Opponent]['Name'] + " Died...")
        }
    }
    RefreshUI();
}
    
function Bag() {//Not Even Close
    var inventory_buffer = "Doesn't work yet<br>";
    for (i = 0; i < InvIndex.length; i++) {
        inventory_buffer += (i + 1) + ". " + Items[InvIndex[i]]['Name'] + " (" + InvQuantity[i] + ")\n";
    }
    if (InvIndex.length == 0) {
        alert("Your inventory is empty!")
    } else {
        var Choose = prompt(inventory_buffer) - 1
    }
}

function Run() {//Not Even Close
    var EscapeChance = Math.floor(Math.random() * 100)
    if (EscapeChance <= 20) {
        alert("You got away safely")
        RefreshUI();
    }
    else {
        alert("You couldn't get away")
    }
}

// MAIN program execution

UserCharacterInfo['Name'] = prompt("What's your name?", "Mendo");
UserCharacterInfo['Gender'] = prompt("Your gender?");
if (UserCharacterInfo['Gender'].toLowerCase() != "male" && UserCharacterInfo['Gender'].toLowerCase() != "female") {
    alert("That's not a gender, by the way.");
    UserCharacterInfo['Gender'] = "Unknown"
}
RefreshUI();