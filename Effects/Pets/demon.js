class PetDemon
{
    static States = {
        idle:{
            name:"idle",
            loop_time:2000,
            nr_frames:2,
            state_interval: [500, 1000],
            get_next_state: (p) => {
                if(p.energy <= Math.random() * 10)
                    return PetDemon.States.sleep;
                if(Math.random() > 0.5)
                    return PetDemon.States.idle;
                return PetDemon.States.walk;
            },
            do: (p) => { }
        },
        walk:{
            name:"walk",
            loop_time:500,
            nr_frames:2,
            state_interval: [2000, 10000],
            get_next_state: (p) => {
                if(Math.random() > 0.5 || p.energy <=0)
                    return PetDemon.States.idle;
                return PetDemon.States.run;
            },
            do: (p) => {
                if(p.facing_direction > 1)
                    p.facing_direction -= 0.1;
                else if(p.facing_direction < -1)
                    p.facing_direction += 0.1;
                p.posX += p.facing_direction;
                p.energy -= 0.1;

                let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                if(p.posX < 0){
                    p.posX = 0;
                    p.state_interval_time = 0;
                }
                else if(p.posX > vw - 100){
                    p.posX = vw - 100;
                    p.state_interval_time = 0;
                }
                
                p.state_interval_time -= PetDemon._delta_time;
                if(p.state_interval_time <= 0){
                    p._flip_frame();
                    p.state_interval_time = PetDemon._generateStateTimeOut(1000, 10000);
                }

                p._showNewPosition();
            }
        },
        run:{
            name:"walk",
            loop_time:200,
            nr_frames:2,
            state_interval: [2000, 10000],
            get_next_state: (p) => {
                return PetDemon.States.walk;
            },
            do: (p) => {
                if(p.facing_direction > 0 && p.facing_direction < 5)
                    p.facing_direction += 0.1;
                else if(p.facing_direction < 0 && p.facing_direction > -5)
                    p.facing_direction -= 0.1;
                p.posX += p.facing_direction;
                p.energy -= 1;

                let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                if(p.posX < 0){
                    p.posX = 0;
                    p.state_interval_time = 0;
                }
                else if(p.posX > vw - 100){
                    p.posX = vw - 100;
                    p.state_interval_time = 0;
                }
                
                p.state_interval_time -= PetDemon._delta_time;
                if(p.state_interval_time <= 0){
                    p._flip_frame();
                    p.state_interval_time = PetDemon._generateStateTimeOut(500, 3000);
                }

                p._showNewPosition();
            }
        },
        pet:{
            name:"pet",
            loop_time:300,
            nr_frames:2,
            state_interval: [2000, 2000],
            get_next_state: (p) => {
                return PetDemon.States.idle;
            },
            do: (p) => { }
        },
        sleep:{
            name:"sleep",
            loop_time:1000,
            nr_frames:2,
            state_interval: [5000, 20000],
            get_next_state: (p) => {
                return PetDemon.States.idle;
            },
            do: (p) => { if(p.energy < 0) p.energy = 0; else p.energy += 0.1; }
        },
    };

    posX; posY;

    energy;

    state; 
    last_state;
    state_time_out;
    state_interval_time;

    animation_time;
    last_animation_frame;
    facing_direction;

    div;

    constructor(div) {
        this.div = div;
        this.posX = 0;
        this.posY = 0;
        this.energy = 100;
        this.animation_time = 0;
        this.last_animation_frame = -1;
        this.state = PetDemon.States.idle;
        this.last_state = this.state;
        this.facing_direction = 1;
        this.state_time_out = PetDemon._generateStateTimeOut(3, 10);
        this.state_interval_time = this.state_time_out / 2;

        this.div.onclick = () => {
            this.last_state = this.state;
            this.state = PetDemon.States.pet;
            this._reset_state_values();
        }
        
        this._start();
    }

    _start(){
        setTimeout(PetDemon._update(this), 0);
    }

    static _loaded_images = []
    _checkAnimationFrame(){
        let index = Math.floor(this.state.nr_frames * this.animation_time / (this.state.loop_time));
        if(index >= this.state.nr_frames){
            this.animation_time -= this.state.loop_time;
            this._checkAnimationFrame();
            return;
        }
        if(index != this.last_animation_frame){
            this.last_animation_frame = index;
            
            var img = new Image();
            const div = this.div;
            img.onload = function() {
                PetDemon._loaded_images.push(img.src);
            }
            img.src = RelativePathToRoot + "Effects/Pets/Demon/" + this.state.name + index + ".png";
            div.style.backgroundImage = "url(" + img.src + ")";
        }
    }

    _flip_frame(){
        this.facing_direction *= -1;

        if(this.facing_direction < 0)
            this.div.style.transform = "scaleX(-1)";
        else
            this.div.style.transform = "scaleX(1)";
    }

    _showNewPosition(){
        this.div.style.bottom = this.posY + "px";
        this.div.style.left = this.posX + "px";
    }

    _reset_state_values(){
        this.state_time_out = PetDemon._generateStateTimeOut(this.state.state_interval[0],this.state.state_interval[1]);
        this.last_animation_frame = -1;
    }

    _set_next_state(){
        this.last_state = this.state;
        this.state = this.state.get_next_state(this);
        this._reset_state_values();
    }

    static _generateStateTimeOut(minDuration, maxDuration) {
        return minDuration + Math.random() * (maxDuration - minDuration);
    }

    static _delta_time = 20;
    static async _update(p){
        while(true){
            if(p.state_time_out <= 0){
                p._set_next_state()
            }

            p._checkAnimationFrame();
            p.state.do(p);

            p.animation_time += PetDemon._delta_time;
            p.state_time_out -= PetDemon._delta_time;
            await new Promise(r => setTimeout(r, PetDemon._delta_time));
        }
    }
}

pets = [];

function initializeOnePet()
{
    addStylesheetToHeader("Effects/Pets/pet_stylesheet.css");

    // Create new link specific theme
    let div = document.createElement('div');
    div.classList.add("Pet");
    document.body.appendChild(div);

    pets.push(new PetDemon(div));
}

//window.addEventListener("load", function(event) {
//    initializeOnePet();
//},false);