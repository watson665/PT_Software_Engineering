//Section 1
/*The difference between interpolation and concatentation is...
Interpolation is more clear, concise, and easier to read.

DRY stands for "Do Not Repeat Yourself".
We should pay attention to avoid duplicating, save time, make code easier to read.
We have learned tools like: functions, blocks, strings, indentations, labeling and shortcuts like copy/paste.

conts: block scoped, immutable, needs initialized.
let: block scoped, mutable, doesn't need value initialized.
var: global scoped, mutable, doesn't need value initialized.*/

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
var g = 0

console.log(a<b)
console.log(c>d)
console.log(('name') == 'name')
console.log(a<b<c)
console.log((a==a)<d)
console.log(e!='Kevin')
console.log(48 =='48')
console.log(f!=e)
console.log(g)
var g = b+c
console.log(g)


/* I used the VAR so that I could alter the variable.
Error message: ReferenceError: i is not defined.
Error message: SyntaxError: Invalid left-hand side in assignment.*/

//Section 3
/* The first code is an infinite loop because the loops expression is always true.
The second code is not an infinite loop because it has an expression that stops it from running if the variable is not true.
The expected output is Do not run this loop*/

let letters = "A";
let i = 0;
//Start a whileloop that will run as long as i is less than 20
while (i < 20) {
    //Add an additional A
    letters += "A";
    //Add one A
	i++;
}
//Prints out out two 'A's. I learned that the loop will keep running and stops after i is more than 20. That is why 20 A's appeared.
console.log(letters);

//Section 4
/* For Loop: More concise, used when you don't know how many times you want to loop
While Loop: Used when you know how many times you want to loop
Similarities: allow code to be ran over & over until a stopping condition is met.
The first part of the control panel is: initialization
The second part of the control panel is: condition
The second part of the control panel is: change
*/
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

//Section 5
/*
Last login: Mon Jun  1 22:17:31 on ttys000
PSCBUS-107:~ pscbus_107$ cd Desktop
PSCBUS-107:Desktop pscbus_107$ mkdir galaxy_far_far_away
PSCBUS-107:Desktop pscbus_107$ cd galaxy_far_far_away/
PSCBUS-107:galaxy_far_far_away pscbus_107$ mkdir death_star
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ touch darth_vader.txt
PSCBUS-107:death_star pscbus_107$ touch princess_leia.txt
PSCBUS-107:death_star pscbus_107$ touch storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ mkdir tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd tatooine/
PSCBUS-107:tatooine pscbus_107$ touch luke.txt
PSCBUS-107:tatooine pscbus_107$ touch ben_kenobi.txt
PSCBUS-107:tatooine pscbus_107$ mkdir millenium_falcon
PSCBUS-107:tatooine pscbus_107$ cd millenium_falcon/
PSCBUS-107:millenium_falcon pscbus_107$ touch han_solo.txt
PSCBUS-107:millenium_falcon pscbus_107$ touch chewbaca.txt
PSCBUS-107:millenium_falcon pscbus_107$ cd
PSCBUS-107:~ pscbus_107$ cd Desktop
PSCBUS-107:Desktop pscbus_107$ cd galaxy_far_far_away/
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd tatooine/
PSCBUS-107:tatooine pscbus_107$ ls
ben_kenobi.txt		luke.txt		millenium_falcon
PSCBUS-107:tatooine pscbus_107$ mv ben_kenobi.txt obi_wan.txt
PSCBUS-107:tatooine pscbus_107$ ls
luke.txt		millenium_falcon	obi_wan.txt
PSCBUS-107:tatooine pscbus_107$ cd
PSCBUS-107:~ pscbus_107$ ls
Desktop			Library			Pictures
Documents		Movies			Public
Downloads		Music			galaxy_far_far_away
PSCBUS-107:~ pscbus_107$ cd Desktop
PSCBUS-107:Desktop pscbus_107$ cd galaxy_far_far_away/
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		princess_leia.txt	storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ cp storm_tropper.txt ../tatooine
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd tatooine/
PSCBUS-107:tatooine pscbus_107$ ls
luke.txt		obi_wan.txt
millenium_falcon	storm_tropper.txt
PSCBUS-107:tatooine pscbus_107$ mv luke.txt millenium_falcon/
PSCBUS-107:tatooine pscbus_107$ mv obi_wan.txt millenium_falcon/
PSCBUS-107:tatooine pscbus_107$ cd millenium_falcon/
PSCBUS-107:millenium_falcon pscbus_107$ ls
chewbaca.txt	han_solo.txt	luke.txt	obi_wan.txt
PSCBUS-107:millenium_falcon pscbus_107$ cd ..
PSCBUS-107:tatooine pscbus_107$ mv millenium_falcon ..
PSCBUS-107:tatooine pscbus_107$ ls
storm_tropper.txt
PSCBUS-107:tatooine pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		millenium_falcon	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ mv millenium_falcon/ ../death_star
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		princess_leia.txt	storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		millenium_falcon	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ mv millenium_falcon death_star/
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		princess_leia.txt
millenium_falcon	storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ mv princess_leia.txt millenium_falcon/
PSCBUS-107:death_star pscbus_107$ cd millenium_falcon/
PSCBUS-107:millenium_falcon pscbus_107$ ls
princess_leia.txt
PSCBUS-107:millenium_falcon pscbus_107$ cd
PSCBUS-107:~ pscbus_107$ cd Desktop
PSCBUS-107:Desktop pscbus_107$ cd galaxy_far_far_away/
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd tatooine/
PSCBUS-107:tatooine pscbus_107$ ls
storm_tropper.txt
PSCBUS-107:tatooine pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		millenium_falcon	storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		millenium_falcon	storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ cd millenium_falcon/
PSCBUS-107:millenium_falcon pscbus_107$ touch obi_wan.txt
PSCBUS-107:millenium_falcon pscbus_107$ ls
obi_wan.txt		princess_leia.txt
PSCBUS-107:millenium_falcon pscbus_107$ rm obi_wan.txt
PSCBUS-107:millenium_falcon pscbus_107$ ls
princess_leia.txt
PSCBUS-107:millenium_falcon pscbus_107$ cd ..
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ mkdir yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine	yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ mv millenium_falcon ..
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		storm_tropper.txt
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tatooine
millenium_falcon	yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ mv millenium_falcon ../yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star	tatooine	yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd yavin_4
PSCBUS-107:yavin_4 pscbus_107$ ls
millenium_falcon
PSCBUS-107:yavin_4 pscbus_107$ mkdir x_wing
PSCBUS-107:yavin_4 pscbus_107$ ls
millenium_falcon	x_wing
PSCBUS-107:yavin_4 pscbus_107$ mv millenium_falcon ..
PSCBUS-107:yavin_4 pscbus_107$ mv x_wing ..
PSCBUS-107:yavin_4 pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tatooine		yavin_4
millenium_falcon	x_wing
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd death_star/
PSCBUS-107:death_star pscbus_107$ mkdir tie_fighter_1
PSCBUS-107:death_star pscbus_107$ mkdir tie_fighter_2
PSCBUS-107:death_star pscbus_107$ mkdir tie_fighter_3
PSCBUS-107:death_star pscbus_107$ ls
darth_vader.txt		tie_fighter_1		tie_fighter_3
storm_tropper.txt	tie_fighter_2
PSCBUS-107:death_star pscbus_107$ mv darth_vader.txt tie_fighter_1
PSCBUS-107:death_star pscbus_107$ cd tie_fighter_1
PSCBUS-107:tie_fighter_1 pscbus_107$ ls
darth_vader.txt
PSCBUS-107:tie_fighter_1 pscbus_107$ cd ..
PSCBUS-107:death_star pscbus_107$ ls
storm_tropper.txt	tie_fighter_2
tie_fighter_1		tie_fighter_3
PSCBUS-107:death_star pscbus_107$ cp storm_tropper.txt tie_fighter_2
PSCBUS-107:death_star pscbus_107$ cp storm_tropper.txt tie_fighter_3
PSCBUS-107:death_star pscbus_107$ cd tie_fighter_2
PSCBUS-107:tie_fighter_2 pscbus_107$ ls
storm_tropper.txt
PSCBUS-107:tie_fighter_2 pscbus_107$ cd ..
PSCBUS-107:death_star pscbus_107$ cd tie_fighter_3
PSCBUS-107:tie_fighter_3 pscbus_107$ ls
storm_tropper.txt
PSCBUS-107:tie_fighter_3 pscbus_107$ cd ..
PSCBUS-107:death_star pscbus_107$ mv tie_fighter_1 ..
PSCBUS-107:death_star pscbus_107$ mv tie_fighter_2 ..
PSCBUS-107:death_star pscbus_107$ mv tie_fighter_3 ..
PSCBUS-107:death_star pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_2		yavin_4
tatooine		tie_fighter_3
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd x_wing/
PSCBUS-107:x_wing pscbus_107$ ls
PSCBUS-107:x_wing pscbus_107$ touch the_force.txt
PSCBUS-107:x_wing pscbus_107$ ls
the_force.txt
PSCBUS-107:x_wing pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_2		yavin_4
tatooine		tie_fighter_3
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm tie_fighter_2
rm: tie_fighter_2: is a directory
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm-r
-bash: rm-r: command not found
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r
usage: rm [-f | -i] [-dPRrvW] file ...
       unlink file
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_2		yavin_4
tatooine		tie_fighter_3
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm-r
-bash: rm-r: command not found
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r 
usage: rm [-f | -i] [-dPRrvW] file ...
       unlink file
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r
usage: rm [-f | -i] [-dPRrvW] file ...
       unlink file
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_2		yavin_4
tatooine		tie_fighter_3
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r
usage: rm [-f | -i] [-dPRrvW] file ...
       unlink file
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_2		yavin_4
tatooine		tie_fighter_3
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd tie_fighter_2
PSCBUS-107:tie_fighter_2 pscbus_107$ rm -r
usage: rm [-f | -i] [-dPRrvW] file ...
       unlink file
PSCBUS-107:tie_fighter_2 pscbus_107$ rm-r
-bash: rm-r: command not found
PSCBUS-107:tie_fighter_2 pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r tie_fighter_2
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tie_fighter_1		yavin_4
millenium_falcon	tie_fighter_3
tatooine		x_wing
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r tie_fighter_3
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tatooine		x_wing
millenium_falcon	tie_fighter_1		yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd x_wing/
PSCBUS-107:x_wing pscbus_107$ ls
the_force.txt
PSCBUS-107:x_wing pscbus_107$ cd ..
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
death_star		tatooine		x_wing
millenium_falcon	tie_fighter_1		yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ rm -r death_star/
PSCBUS-107:galaxy_far_far_away pscbus_107$ ls
millenium_falcon	tie_fighter_1		yavin_4
tatooine		x_wing
PSCBUS-107:galaxy_far_far_away pscbus_107$ mv x_wing yavin_4
PSCBUS-107:galaxy_far_far_away pscbus_107$ mv millenium_falcon yavin_4/
PSCBUS-107:galaxy_far_far_away pscbus_107$ cd yavin_4/
PSCBUS-107:yavin_4 pscbus_107$ ls
millenium_falcon	x_wing
PSCBUS-107:yavin_4 pscbus_107$ 
*/