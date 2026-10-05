let activeIndex=null;
const status=document.getElementById("status");
const dead=.08;
function firstPad(){const pads=navigator.getGamepads?navigator.getGamepads():[];for(const p of pads)if(p&&p.connected)return p;return null}
function setPressed(i,on){document.querySelectorAll(`[data-b="${i}"]`).forEach(el=>el.classList.toggle("pressed",on))}
function moveStick(id,x,y){if(Math.abs(x)<dead)x=0;if(Math.abs(y)<dead)y=0;document.getElementById(id).style.transform=`translate(${x*14}px,${y*14}px)`}
function update(){
 const pads=navigator.getGamepads?navigator.getGamepads():[];
 let gp=activeIndex!==null?pads[activeIndex]:null;
 if(!gp){gp=firstPad();if(gp)activeIndex=gp.index}
 if(gp){
   status.textContent=`Player ${gp.index+1}: ${gp.id}`;
   for(let i=0;i<gp.buttons.length;i++)setPressed(i,gp.buttons[i].pressed||gp.buttons[i].value>.5);
   if(gp.axes.length>=4){moveStick("ls",gp.axes[0],gp.axes[1]);moveStick("rs",gp.axes[2],gp.axes[3])}
 } else status.textContent="Connect controller, then press any button";
 requestAnimationFrame(update)
}
window.addEventListener("gamepadconnected",e=>{activeIndex=e.gamepad.index});
window.addEventListener("gamepaddisconnected",e=>{if(activeIndex===e.gamepad.index)activeIndex=null});
requestAnimationFrame(update);