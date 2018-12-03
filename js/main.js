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


// VARIABLES section-----------------------------------------------------------------------------------------------------------------------------------------------------------
//User
var Currency = Math.floor(Math.random() * 401) + 100;
var InvIndex = [];
var InvQuantity = [];
var UserJob = 0;

//Gamemode
var Gamemode = "Standard";

//Attacks
class AttackInfo {
    constructor(Name, Accuracy, Power) {
        this.Name = Name
        this.Accuracy = Accuracy
        this.Power = Power
    }
}
var Attacks = [
    new AttackInfo("High Speed Tackle", 40, 200),
    new AttackInfo("Round House Kick", 55, 160),
    new AttackInfo("Fold", 70, 130),
    new AttackInfo("Bash", 95, 100)
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
var PlayerChar = new CharacterInfo("Yeah", "Male", 1, 0, [0, 1, 2, 3]);
var OpponentChar = new CharacterInfo("Fest", "Male", 2, 1, [0, 1, 2, 3]);


//Items
class ItemInfo {
    constructor(Name, Price, Desc) {
        this.Name = Name
        this.Price = Price
        this.Desc = Desc
    }
}
var Items = [
    new ItemInfo("Hot Pocket", 5, "Need a delicious and satisfying snack? Hot Pockets® brand sandwiches are made with quality ingredients to deliver delicious taste and big flavor. +5 health. Restores 10HP."),
    new ItemInfo("Maruchan Ramen", 10, "The Maruchan ramen is a very popular brand of noodles in the United-States. +15 health. Restores 20HP."),
    new ItemInfo("New TV Remote", 20, "Infrared All in One Remote Control. I guess you could throw it at somebdy?"),
    new ItemInfo("BackScraterenator 3000", 180, "This handy telescopic back scratcher features a comfortable cushion grip handle and a bear paw shaped metal claw. It uses Batteries, I hope they don't run out... If you're in danger you might be able to break it on someones head."),
    new ItemInfo("Caleb", 250, "If you feed him 25 cents, he'll fix your roof."),
    new ItemInfo("Rusty ScrewDriver", 180, "I found this in the dumpster out back. Can use it as a struggle knife."),
    new ItemInfo("Machete", 500, "It's construction looks pretty cheap. It might last a couple shots if i'm lucky."),
    new ItemInfo("Fake ID", 8000, "Discard your current ID and become someone else under a new name and ID"),
    new ItemInfo("Rosetta Stone", 10000, "Levels you up instantly."),
    new ItemInfo("Cyber Nuke", 100000, "Launches 69 Laminated Mobile Hyper Rune Double Helix Proton Decimator Missiles")
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


// FUNCTION section------------------------------------------------------------------------------------------------------------------------------------------------------------
function RefreshUI() {//Gets Constantly Updated
    //Removes Excess HP
    if (PlayerChar['HealthCurrent'] > Levels[PlayerChar['Level']]['Health']) {
        PlayerChar['HealthCurrent'] = Levels[PlayerChar['Level']]['Health'];
    }

    //Levels Up character if they have enough exp
    if (PlayerChar['ExperienceCurrent'] > Levels[PlayerChar['Level']]['Experience']) {
        PlayerChar['Level']++
        PlayerChar['ExperienceCurrent'] = 0;
        alert(" Congrats! You are now Level " + PlayerChar['Level'])
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
    document.getElementById("display_username").innerHTML = PlayerChar['Name'];
    document.getElementById("display_usergender").innerHTML = "Gender: " + PlayerChar['Gender'];
    document.getElementById("display_userstats").innerHTML = "Level: " + PlayerChar['Level'] + "<br>HP: " + PlayerChar['HealthCurrent'] + " / " + Levels[PlayerChar['Level']]['Health'] + "<br>ATK: " + Levels[PlayerChar['Level']]['Attack'] + "<br>DEF: " + Levels[PlayerChar['Level']]['Defense'] + "<br>SPD: " + Levels[PlayerChar['Level']]['Speed'] + "<br>EXP: " + PlayerChar['ExperienceCurrent'] + " / " + Levels[PlayerChar['Level']]['Experience'];
    document.getElementById("UserIcon").src = PlayerChar['Icon'];

    //NPCRefresh
    document.getElementById("display_NPCname").innerHTML = OpponentChar['Name'];
    document.getElementById("display_NPCgender").innerHTML = "Gender: " + OpponentChar['Gender'];
    document.getElementById("display_NPCStats").innerHTML = "Level: " + OpponentChar['Level'] + "<br>HP: " + OpponentChar['HealthCurrent'] + " / " + Levels[OpponentChar['Level']]['Health'];
    document.getElementById("NPCIcon").src = OpponentChar['Icon'];

    //Update BucketList
    var bucketlist_buffer = "";
    var BucketlistCheck = [];

    //Do you have rossetta stone
    if (document.getElementById("CyberRealm").hidden == false) {
        bucketlist_buffer += "Done - Launch a cyber nuke <br>";
        BucketlistCheck.push(true)
    }
    else {
        bucketlist_buffer += "____ - Launch a cyber nuke <br>";
        BucketlistCheck.push(false)
    }

    //Do you have big money
    if (Currency >= 100000) {
        bucketlist_buffer += "Done - Get 100,000 Dollars <br>"
        BucketlistCheck.push(true)
    }
    else {
        bucketlist_buffer += "____ - Get 100,000 Dollars <br>"
        BucketlistCheck.push(false)
    }
    //Do you have big flex?
    if (PlayerChar['Level'] > 9) {
        bucketlist_buffer += "Done - Become level 10 <br>"
        BucketlistCheck.push(true)
    }
    else {
        bucketlist_buffer += "____ - Become level 10 <br>"
        BucketlistCheck.push(false)
    }

    //Science Job
    if (UserJob == 5) {
        bucketlist_buffer += "Done - Become a scientist <br>"
        BucketlistCheck.push(true)
    }
    else {
        bucketlist_buffer += "____ - Become a scientist <br>"
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
    //Makes store and asks for player to buy or sell
    var UserInput = prompt("Store Owner: \nHi how you doing? What do you need today\n1. Buy\n2. Sell");

    //Player chooses buy
    if (UserInput == 1) {
        Buy()

        //Player chooses sell
    } else if (UserInput == 2) {
        Sell()

        //Player cancels or leaves blank
    } else {
        alert("Store Owner: \nUhh. Have a nice day?")
    }
}

function Buy() {//Done
    //Makes store prompts text
    var InvStore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var text = "";
    var i;
    for (i = 0; i < InvStore.length; i++) {
        text += (i + 1) + ". " + Items[InvStore[i]]['Name'] + " - $" + Items[InvStore[i]]['Price'] + "\n"
    }

    //Asks player to select an item to purchase
    UserInput = prompt("Store Owner: \nChoose anything you like. \n\n" + text) - 1;
    if (UserInput < InvStore.length && UserInput >= 0) {

        //Asks how many of the selected items the player wants to buy at one time but cannot exceed 1000
        var Many = prompt("Store Owner: \nHow many do you want to buy", 1)
        if (Many > 0 && Many <= 1000) {

            //Checks if player has enough currency to purchase the item(s)
            if (Currency > Items[InvStore[UserInput]]['Price'] * Many) {

                //Asks for players confirmation
                var Confirm = prompt(Items[InvStore[UserInput]]['Name'] + " x" + Many + " - $" + (Items[InvStore[UserInput]]['Price'] * Many) + "\n" + Items[InvStore[UserInput]]['Desc'] + "\n\nStore Owner: \nAre you sure you want to buy this?\n1. Yes \n2. No")

                //Player accepts purchase
                if (Confirm == 1) {

                    //Subtracts item prices from player currency
                    Currency -= Items[InvStore[UserInput]]['Price'] * Many;

                    //Adds item(s) to inventory
                    AddToInventory(InvStore[UserInput], Many);
                    alert("Store Owner:\nThank you for your purchase.")
                    RefreshUI();
                }

                //Player rejects purchase
                else {
                    alert("Store Owner: \nYou forget you wallet? Yeah like I haven't heard that one before.")
                    Buy();
                }
            }

            //Player does not have enough money
            else {
                alert("Store Owner: \nGet your broke a$$ outta here!")
            }
        }

        //Player cancels or does not leave a valid response
        else {
            alert("Store Owner: \nUmmm... Where are your parents?")
        }
    }

    //Player cancels out of shop
    else {
        alert("Store Owner: \nThank you. Come again!")
    }
}

function Sell() { //Done
    //Make sell prompts text
    var text = ""
    var i;
    for (i = 0; i < InvIndex.length; i++) {
        text += (i + 1) + ". " + Items[InvIndex[i]]['Name'] + " - $" + Items[InvIndex[i]]['Price'] + "\n"
    }

    //Asks player to select an item to sell
    UserInput = prompt("Store Owner: \nWhat have you got for me today?\n \n" + text) - 1;
    if (UserInput < InvIndex.length && UserInput >= 0) {

        //Asks how many of the selected items the player wants to sell at one time but cannot exceed the quantity of the item they have in their inventory
        var Many = prompt("Store Owner: \nHow many do you want to sell", 1)
        if (Many > 0 && Many <= InvQuantity[UserInput]) {

            //Asks for players confirmation
            var Confirm = prompt(Items[InvIndex[UserInput]]['Name'] + " - $" + (Items[InvIndex[UserInput]]['Price'] * Many) + "\n" + Items[InvIndex[UserInput]]['Desc'] + "\n\n Store Owner: \nAre you sure you want to sell this?\n1. Yes \n2. No");

            //Player accepts sale
            if (Confirm == 1) {

                //Adds item(s) prices to players currency
                Currency += Items[InvIndex[UserInput]]['Price'] * Many;

                //Removes item(s) from inventory 
                RemoveToInventory(UserInput, Many);
                alert("Store Owner: \nPleasure doing buisness with you!")
                RefreshUI();
            }

            //Player rejects sale
            else {
                alert("Store Owner: \nDamn. I really wanted that one.")
                Sell();
            }
        }

        //Player is attempting to sell more of the selected items than they have in their inventory
        else if (Many >= InvQuantity[UserInput]) {
            alert("Store Owner:\n" + Many + "!! you know you ain't got that many!")
            Sell();
        }

        //Player cancels or does not leave a valid response
        else {
            alert("Store Owner: \nDo you need anything? Sir.")
        }
    }

    //Player cancels or does not leave a valid response
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
    InvQuantity[Item] -= Minus;
    if (InvQuantity[Item] < 1) {
        
        InvIndex.splice(Item, 1);
        InvQuantity.splice(Item, 1);
    }
    RefreshUI();
}

function UseItem() {//Done
    var inventory_buffer = "Use an Item? \n";
    var Random = Math.floor(Math.random() * 100) + 1
    if (InvIndex.length == 0) {
        alert("Your inventory is empty!")
    }
    else {
        for (i = 0; i < InvIndex.length; i++) {
            inventory_buffer += (i + 1) + ". " + Items[InvIndex[i]]['Name'] + " (" + InvQuantity[i] + ")\n";
        }
        var Choose = prompt(inventory_buffer) - 1
    }

    alert(PlayerChar['Name'] + " used the " + Items[InvIndex[Choose]]['Name'])
    switch (Items[InvIndex[Choose]]['Name']) {
        case "Hot Pocket":
            alert("You ate the Hot Pocket. It was very tasty")
            PlayerChar['HealthCurrent'] += 5
            RemoveToInventory(Choose, 1)
            break;

        case "Maruchan Ramen":
            alert(PlayerChar['Name'] + " ate the soup. It was very tasty")
            PlayerChar['HealthCurrent'] += 8
            RemoveToInventory(Choose, 1)
            break;

        case "New TV Remote":
            if (Opponent == 12 && Gamemode == "Battle") {
                alert("You her turned off ")
                OpponentChar['HealthCurrent'] = 0
                RemoveToInventory(Choose, 1)
            }
            else {
                alert("But nothing happend")
            }
            break;

        case "BackScraterenator 3000":
            if (Gamemode == "Standard") {
                alert("You scratched your back! feels good! It even restored some health.")
                PlayerChar['HealthCurrent'] += 15
                if (Random <= 40) {
                    alert("The BackScraterenator 3000 ran out of batteries")
                    RemoveToInventory(Choose, 1)
                }
            }
            else if (Gamemode == "Battle") {
                alert("You bashed " + OpponentChar['Name'] + "upside the face with the BackScraterenator 3000")
                OpponentChar['HealthCurrent'] -= 5
                if (Random <= 75) {
                    alert("The BackScraterenator 3000 broke")
                    RemoveToInventory(Choose, 1)
                }
            }
            break;

        case "Caleb":
            alert("Your roof has is fixed! You felt so relaxed it restored some health.")
            PlayerChar['HealthCurrent'] += 20
            RemoveToInventory(Choose, 1)
            break;

        case "Rusty ScrewDriver":
            if (Gamemode == "Battle") {
                alert("It's not as strong as you thought. The tip broke off and got stuck in " + OpponentChar['Name'] + "'s shoulder")
                OpponentChar['HealthCurrent'] -= 10
                RemoveToInventory(Choose, 1)
            }
            else {
                alert("But nothing happend")
            }
            break;

        case "Machete":
            if (Gamemode == "Battle") {
                OpponentChar['HealthCurrent'] -= 25
                alert("You slashed " + OpponentChar['Name'] + "with the machete")
                if (Random <= 36) {
                    alert("It's not as strong as you thought. The blade broke off and got stuck in " + OpponentChar['Name'] + "'s chest")
                    RemoveToInventory(Choose, 1)
                }
            }
            else {
                alert("But nothing happend")
            }
            break;

        case "Fake ID":
            StartUp();
            RemoveToInventory(Choose, 1)
            break;

        case "Rosetta Stone":
            alert("The Rosetta Stone filled you with power. You leveled up!")
            PlayerChar['Level']++
            RemoveToInventory(Choose, 1)
            break;

        case "Cyber Nuke":
            alert("Initialize Protcal \n C:/Users/TheLegend27/Documents/CuberNuke/Laminated Mobile Hyper Rune Double Helix Proton Decimator Missile Launch System.exe")
            alert("69 missiles launched into the air at 1,000,000,000,000 m/s made a quick trip around the moon and then came crashing down at 1,000,000,000,000 m/s.")
            alert("The impact also left a crack in space and time making it possible to access the power of the cyberverse")
            if (Gamemode == "Battle") {
                alert(OpponentChar['Name'] + " was sent to the recycle bin and then deleted from existance.")
                OpponentChar['HealthCurrent'] -= 10000000;
            }
            document.getElementById("CyberRealm").hidden = false;
            RemoveToInventory(Choose, 1)
            break;
    }
    RefreshUI();
}

//Job Functions
function JobOptions() { //Done
    function Apply() { //Done
        //Makes list of places for player to apply
        var i;
        var text = "";
        for (i = 1; i < Jobs.length; i++) {
            text += i + ". " + Jobs[i]['Job'] + "\n"
        };

        //Asks for player to pick from list of jobs to apply to
        var UserInput = prompt(PlayerChar['Name'] + ": \nWhat job do I want to apply for?\n" + text + i + ". Cancel");
        if (UserInput >= 1 && UserInput < i) {

            //Asks for players confimation and gives warnings about submiting an application
            var Confirm = prompt(PlayerChar['Name'] + ": \nMy chance of getting a job at " + Jobs[UserInput]['Job'] + " is about " + Jobs[UserInput]['Chance'] + " percent.\n\n Am I sure I want to apply?\n1. Yes\n2. No");

            //TRUE if player accepted terms and conditions
            if (Confirm == 1) {

                //Checks if players application will be accepted with probability
                var Random = Math.floor(Math.random() * 101);
                if (Jobs[UserInput]['Chance'] > Random) {

                    //Application gets accepted
                    UserJob = UserInput;
                    alert(PlayerChar['Name'] + ": \nI got the job!")
                }

                //Application gets rejected
                else {
                    alert(PlayerChar['Name'] + ": \nThese losers don't see talent when it's right in front of them!")
                }

                //Ends the day
                IncrementDay();
                RefreshUI()
            }

            //Player did not accept terms and conditions and decided not to submit application
            else {
                alert(PlayerChar['Name'] + ": \nWhatever. It's not like I wanted to work there.")
                Apply()
            }
        }

        //Player did pick from list of jobs to apply or canceled prompt
        else {
            alert(PlayerChar['Name'] + ": \nPfffft! Who needs work anyways?")
        }
    }

    function Resign() { //Done
        //Asks for players confimation for quiting job
        UserInput = prompt(PlayerChar['Name'] + ": \nDo I really want to quit my " + Jobs[UserJob]['Job'] + " job?\n1. Yes\n2. No")

        //TRUE if user picks yes and decides to quit their job
        if (UserInput == 1) {

            //Sets job to unemployed
            alert("You quit your job at " + Jobs[UserJob]['Job']);
            UserJob = 0;

            //Ends the day
            IncrementDay();
            RefreshUI();
        }

        //TRUE if user picks no and decides to keep job
        else if (UserInput == 2) {
            alert(PlayerChar['Name'] + ": \nYeah, I think I'm set.")
        }

        //user clicks cancel or leaves prompt empty
        else {
            alert(PlayerChar['Name'] + ":\nTo work or to not work. Hmmmmm...")
        }
    }

    function Intern() { //Done
        //Makes list of places for player to intern
        var i;
        text = "";
        for (i = 1; i < Jobs.length; i++) {
            text += i + ". " + Jobs[i]['Job'] + "\n"
        }

        //Asks for player to pick from list to intern
        UserInput = prompt(PlayerChar['Name'] + ": \nWhere do I want to Intern? \n" + text);
        if (UserInput >= 1 && UserInput < i) {

            //Asks for players confimation and gives warnings about the internship
            var Confirm = prompt(PlayerChar['Name'] + ": \nIf I intern at " + Jobs[UserInput]['Job'] + " it will raise your chances of getting in by 3 percent I think. However it will take the next 7 days. \n\nShould I do it?\n1. Yes\n2. No");

            //TRUE if player accepted terms and conditions
            if (Confirm == 1) {

                //Raise players chance at getting the job they interned for by 3 percent
                Jobs[UserInput]['Chance'] += 3;
                alert(PlayerChar['Name'] + " interned for " + Jobs[UserInput]['Job'] + " for the next week\nYour chance of getting that job next time is now " + Jobs[UserInput]['Chance'] + " Percent");

                //Moves the calendar ahead 7 days
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
                IncrementDay();
            }

            //Player did not accept terms and conditions
            else {
                alert(PlayerChar['Name'] + ":\nKinda busy right now, maybe later...")
            }
        }

        //Player did pick from list of jobs to intern
        else {
            alert(PlayerChar['Name'] + ": \nI think I left my stove on at home...")
        }
    }

    //Makes prompt for player who is unemployed
    if (UserJob == 0) {
        UserInput = prompt(PlayerChar['Name'] + ": \nWhat to do?\n1. Find Work \n2. Get Internship");
        if (UserInput == 1) {
            Apply()
        } else if (UserInput == 2) {
            Intern()
        } else {
            alert(PlayerChar['Name'] + ": \nWho needs work anyways...")
        }
    }

    //Makes prompt for player who has a job
    else {
        UserInput = prompt(PlayerChar['Name'] + ": \nWhat to do?\n1. Quit Current Job");
        if (UserInput == 1) {
            Resign()
        } else {
            alert(PlayerChar['Name'] + ": \nI like my job thank you very much")
        }
    }
}

//Payment Functions
function PayBills() {//Done
    //Objects for excuse
    function Excuse(Amount, Reason) {
        this.Amount = Amount
        this.Reason = Reason
        this.FullExcuse = Reason + "\nYou spent $" + Amount
    }
    var Excuses = [
        new Excuse(215, "I hope I have enough to pay the water bill."),
        new Excuse(370, "I have to pay the gas and electric."),
        new Excuse(100, "I have to get clothes and food for that party that everybody is talking about."),
        new Excuse(250, "Today, I'm going to by 50 Maruchan Ramen, just because."),
        new Excuse(300, "That truck isn't going to fix itself."),
        new Excuse(90, "Phone bills are such a pain in the ass"),
        new Excuse(25, "I need to renew my world of warcraft subscription"),
        new Excuse(150, "Damn, someone pickpcked me!")
    ];

    //Picks random excuse
    var RandomExcuse = Math.floor(Math.random() * 8)
    alert(PlayerChar['Name'] + ": \n" + Excuses[RandomExcuse]['FullExcuse']);

    //Subtracts from players currency
    Currency -= Excuses[RandomExcuse]['Amount'];
}

function PayDay() {//Done
    //TRUE if player is unemployed
    if (UserJob == 0) {
        alert(PlayerChar['Name'] + ": \nNothing to worry about my parents still love me. They sent 50 bucks!")
    }
    //TRUE if player has job
    if (UserJob > 0) {

        //Generates random bonus 0 - 99
        var Random = Math.floor(Math.random() * 100)

        //Adds player's job base salary + random bonus to players currency
        Currency += Jobs[UserJob]['Salary'] + Random
        alert(PlayerChar['Name'] + ": \nI earned $" + (Jobs[UserJob]['Salary'] + Random) + " from my job at " + Jobs[UserJob]['Job']);
    }
}

//TimeFunctions
function IncrementDay() {//Done
    Day365++;

    //If Day of week is Friday then player gets paid
    if (Day365 % 7 == 6) {
        PayDay();
    }

    //If Day of the week is every other friday you pay bills
    if (Day365 % 14 == 13) {
        PayBills();
    }

    //Possible Random Bills
    if (Math.floor(Math.random() * 100) + 1 <= 10) {
        PayBills();
    }

    //Possible Random Encounter
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

    //Set Day in month
    DayMonth = Day365;
    for (i = 0; i <= Month; i++) {
        DayMonth -= DaysInMonth[i]
    }
    DayMonth += DaysInMonth[Month]

    //Set day in week
    DayWeek = Day365 % 7

    //Resets year if year ends
    if (Day365 > 365) {
        Day365 = 0;
        Year++;
        IncrementDay();
    }
    RefreshUI();
}

//Combat
function RandomEncounter() {//Done
    //Gets random level +/- 3 of the players own level.
    var RandLevel = PlayerChar['Level'] + Math.floor(Math.random() * 5) - 2;
    if (RandLevel < 1) {
        RandLevel = 1;
    }

    //Gets Random Name
    var Names = ["Fest", "Swift", "Roush", "Grub", "Anvil", "Napalm", "Slate", "Brush", "Grease", "Chub", "Spice", "Plug", "Lenz", "Rhyme", "Shackle", "Mania", "Clam", "Splice", "Mist", "Quilt", "Socket"];
    var RandName = Names[Math.floor(Math.random() * 20)];

    //Gets Random Gender
    var Genders = ["Male", "Female"];
    var RandGender = Genders[Math.floor(Math.random() * 2)];

    //Get's Random Icon
    var RandIcon = [Math.floor(Math.random() * 19) + 1];

    //Makes Opponent
    OpponentChar = new CharacterInfo(RandName, RandGender, RandLevel, RandIcon, [0, 1, 2, 3]);

    //Changes Opponents Profile Pic if they have the same one as the player to avoid confusion
    if (PlayerChar['Icon'] == OpponentChar['Icon']) {
        OpponentChar['Icon'] = ProfilePics[0];
    }

    //Starts Battle
    alert("A wild " + OpponentChar['Name'] + " has appeared.")
    Gamemode = "Battle";
    RefreshUI();
}

function Fight() {//Done
    //Asks player whick attack they want to use
    var text = "";
    for (i = 0; i < 4; i++) {
        text += (i + 1) + ". " + Attacks[PlayerChar['Move'][i]]['Name'] + " |Power - " + Attacks[PlayerChar['Move'][i]]['Power'] + " |Accuracy - " + Attacks[PlayerChar['Move'][i]]['Accuracy'] + "\n"
    }
    var UserInput = prompt(text) - 1;
    if (UserInput >= 0 && UserInput < 4) {

        //ATTACK

        //TRUE if the opponent is faster than the player
        if (Levels[OpponentChar['Level']]['Speed'] > Levels[PlayerChar['Level']]['Speed']) {

            //Opponent attacks
            UseAttack(OpponentChar, PlayerChar, 0);

            //Checks if player survived
            if (PlayerChar['HealthCurrent'] > 0) {

                //Player Attacks
                UseAttack(PlayerChar, OpponentChar, UserInput);

                //Checks if the opponent survived
                if (OpponentChar['HealthCurrent'] < 0) {

                    //Opponent didn't survive
                    alert(OpponentChar['Name'] + " Died...");
                    EndBattle();
                }
            }
            //Player didn't survive
            else {
                alert("You Died...");
                EndBattle();
            }
        }


        //TRUE if the player is faster than the opponent
        else if (Levels[OpponentChar['Level']]['Speed'] < Levels[PlayerChar['Level']]['Speed']) {

            //Player Attacks
            UseAttack(PlayerChar, OpponentChar, UserInput);

            //Checks if the opponent survived
            if (OpponentChar['HealthCurrent'] > 0) {

                //Opponents attacks
                UseAttack(OpponentChar, PlayerChar, 0);

                //Checks if player survived
                if (PlayerChar['HealthCurrent'] < 0) {

                    //Player didn't survive
                    alert("You Died...");
                    EndBattle();
                }
            }
            //Opponent didn't survive
            else {
                alert(OpponentChar['Name'] + " Died...")
                EndBattle();
            }
        }
        //If you and your opponents speed is equal
        else if (Levels[OpponentChar['Level']]['Speed'] == Levels[PlayerChar['Level']]['Speed']) {
            if (Math.random() <= .5) {
                UseAttack(OpponentChar, PlayerChar, 0); //Opponent attacks
                if (PlayerChar['HealthCurrent'] > 0) { //If you survived
                    UseAttack(PlayerChar, OpponentChar, UserInput);
                    if (OpponentChar['HealthCurrent'] < 0) {
                        alert(OpponentChar['Name'] + " Died...");
                        EndBattle();
                    }
                }
                else { //You didn't survive
                    alert("You Died...");
                    EndBattle();
                }
            }
            else {
                UseAttack(PlayerChar, OpponentChar, UserInput);
                if (OpponentChar['HealthCurrent'] > 0) { //If you opponent survived
                    UseAttack(OpponentChar, PlayerChar, 0); //Opponent attacks
                    if (PlayerChar['HealthCurrent'] < 0) {
                        alert("You Died...");
                        EndBattle();
                    }
                }
                else { //Opponent didn't survive
                    alert(OpponentChar['Name'] + " Died...")
                    EndBattle();
                }
            }
        }
        RefreshUI();
    }
}

function Bag() {//Done
    UseItem();
    //TRUE if you opponent survived
    if (OpponentChar['HealthCurrent'] > 0) {

        //Opponent attacks
        UseAttack(OpponentChar, PlayerChar, 0);
    }

    //Opponent didn't survive
    else {
        alert(OpponentChar['Name'] + " Died...")
        EndBattle();
    }
    RefreshUI();
}

function Run() {//Done
    //Checks if player can run away
    if (Math.random() <= .33) {

        //Run Succses
        alert("You got away safely")
        Gamemode = "Standard";
        RefreshUI();
    }

    //Run Unsuccsessful
    else {
        alert("You couldn't get away")

        //Opponent attacks
        UseAttack(OpponentChar, PlayerChar, 0);

        //Checks if the player survived
        if (PlayerChar['HealthCurrent'] < 0) {

            //Player didn't survive
            alert("You Died...")
            EndBattle();
        }
    }
    RefreshUI();
}

function EndBattle() {//Done
    //TRUE if opponent didn't survive
    if (OpponentChar['HealthCurrent'] < 1) {

        //Gives the player EXP based on opponents level
        alert("You got " + OpponentChar['Level'] + " Experience")
        PlayerChar['ExperienceCurrent'] += OpponentChar['Level'];

        //Gives player random prize money within $100 - $200
        var PrizeMoney = Math.floor(Math.random() * 100) + 101;
        Currency += PrizeMoney;
        alert("You stole $" + PrizeMoney + " from " + OpponentChar['Name'])
    }

    //TRUE if player didn't survive
    else if (PlayerChar['HealthCurrent'] < 1) {

        //Restores Players Health
        PlayerChar['HealthCurrent'] = Levels[PlayerChar['Level']]['Health'];

        //Subtracts $1000 from player's currency due to hospital bills
        Currency -= 1000;
        alert("This is for your hopital bills \nCurrency -$1000");

        //Player is penalized by spending 5 days in the hospital
        Day365 += 5;
    }

    //Ends the battle
    Gamemode = "Standard";
    RefreshUI();
}

function DamageCalc(Perpetrator, Victim, Attack) {//Done
    //Generates random number between .85 and 1.15
    var Random = (Math.floor(Math.random() * 30) + 85) / 100;

    //10 percent chance of move being critical
    var Critical = 1;
    if (Math.floor(Math.random() * 100) + 1 <= 10) {
        Critical = 2;
        alert("It's a critical hit! That's alotta damage!")
    }

    //Full damage formula
    return Math.floor(((2 * Perpetrator['Level'] / 5 + 2) * Attacks[Attack]['Power'] * Levels[Perpetrator['Level']]['Attack'] / Levels[Victim['Level']]['Defense'] / 30 / 50 + 2) * Random) * Critical;
}

function UseAttack(Perpetrator, Victim, Attack) {//Done
    //if the perpetrator is not the player then pick a random attack
    if (Perpetrator != PlayerChar) {
        var Attack = Math.floor(Math.random() * 4)
    }

    //Perpetrator attacks
    alert(Perpetrator['Name'] + " used " + Attacks[Attack]['Name'])

    //Checks if a move will hit/miss based on the attacks accuracy
    var Random = Math.floor(Math.random() * 100) + 1;
    if (Random < Attacks[Attack]['Accuracy']) {

        //Perpetrators attack hits
        Victim['HealthCurrent'] -= DamageCalc(Perpetrator, Victim, Perpetrator['Move'][Attack]);
    }

    //Perpetrator's attack missed
    else {
        alert(Perpetrator['Name'] + " missed, What a dumbass!")
    }
}

//Cheats
function Cheats() {//Done
    var Password = prompt("Whats the password?").toLowerCase();
    if (Password == "it's free real estate") {
        var Cheat = prompt("Enter Cheat Code...").toLowerCase();
        switch (Cheat) {
            case "money":
                Currency = 1000000;
                alert("Money = 1000000")
                break;

            case "level":
                PlayerChar['Level'] = 10;
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
        Day365 += 20;
    }
    RefreshUI();
}

//Customize Character
function StartUp() {//Done
    //Asks player for a name for their character
    do {
        PlayerChar['Name'] = prompt("What's your name?");
    }
    while (!PlayerChar["Name"]);

    //Asks player for a gender for thier character
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
        PlayerChar['Gender'] = "Male"
    }
    else if (Gender == 2) {
        PlayerChar['Gender'] = "Female"
    }

    //Asks player for a desired appearance
    while (UserInput < 0 || UserInput > 19 || UserInput == undefined) {
        var UserInput = prompt("I want to look like a...\n1. Sponge \n2. Squid \n3. Star \n4. Squirrel \n5. Krab \n6. Plankton \n7. Snail \n8. PufferFish \n9. Whale \n10. Fancy Squid \n11.King \n12. Lobster \n13. Computer \n14. Weakling \n15. Ghost \n16. Parrot \n17. Fish \n18. Grandma \n19. Retired SideKick \n20. Retired Hero") - 1;
        if (UserInput >= 0 && UserInput < 20) {
            PlayerChar['Icon'] = ProfilePics[UserInput];
        }
    }
}


// MAIN program execution------------------------------------------------------------------------------------------------------------------------------------------------------
StartUp();
RefreshUI();