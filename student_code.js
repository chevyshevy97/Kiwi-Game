
//Shivani Upadhayay
//903133182/supadhayay3@gatech.edu
//I worked on the homework assignment alone, using only this semester's course materials.

kiwi_caught = 0;

function render_frame() {
    // your code here
    if (is_down("b")) {
        truck_brake()
    } else if(is_down("left")) {
        truck_move_left()
    } else if(is_down("right")) {
        truck_move_right()
    } else {
        truck_coast()
    } 
    truck_update_position(); 

    if (Math.random() * 100 < kiwi_rate) {
        create_kiwi();
    }            
}

function truck_move_right() {
    // your code here[=]
    set_truck_velocity(get_truck_velocity() + 2)
    if (get_truck_velocity() > 20) {
        set_truck_velocity(20);
    }
}

function truck_move_left() {
    // your code here
    set_truck_velocity(get_truck_velocity() - 2)
    if (get_truck_velocity() < -20) {
        set_truck_velocity(-20);
    }
}

function truck_coast() {
    // your code here
    if (get_truck_velocity() > 0) {
        set_truck_velocity(get_truck_velocity()-(get_truck_velocity()/20))
    }
}

function truck_brake() {
    // your code here
    if (get_truck_velocity() > 0) {
        set_truck_velocity(get_truck_velocity()-(get_truck_velocity()/4))
    }
}

function truck_update_position() {
    // your code here
    var update = get_truck_velocity() + get_truck_left();
    set_truck_left(update);
    var x2 = get_truck_left() + 250;
    if(x2 > window.innerWidth) {      
        set_truck_left(window.innerWidth-250)
    }
    else if(get_truck_left() < 0) {
        set_truck_left(0);
    }
}

function check_collision(kiwi) {
    // your code here
    if((get_kiwi_y(kiwi) > window.innerHeight - 10) & (get_kiwi_x(kiwi) > get_truck_left()) & (get_kiwi_x(kiwi) < get_truck_left() + 125)) {
        kiwi_caught++
        delete_kiwi(kiwi)
        document.getElementById("kiwi-count").innerHTML = kiwi_caught;
 } 
}

function game_end() {
    // your code here
    alert("Game Over!", "Congratulations on catching " + kiwi_caught + " kiwis!", "Restart the game!")
    kiwi_caught = 0;
    document.getElementById("kiwi-count").innerHTML = kiwi_caught;
}