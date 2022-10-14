import JSUTIL from '@andresclua/jsutil/';
class Collapse{
    constructor(){
        this.jsutil = new JSUTIL();
        this.selector = document.querySelectorAll('[data-ds-element="collapse"]');
        this.events();
     
    }
    events(){
        //loop all elements with data-ds-element="collapse"]
        this.selector.forEach(element => {
            // add event to all of those elements
            element.addEventListener('click', event => {
                event.preventDefault(); 
                var collapseArg = {
                     /*
                    * targetID // Collapse element to Expand/Collapse 
                    * targetClass  // Collapse class applied to Expand/Collapse element || ex: "b--collapse-X--is-active"
                    */
                    targetID:element.getAttribute('data-collapse-id'),
                    targetClass : element.getAttribute('data-target-class'),
                    
                    /*
                    * objectId // Collapse trigger element  
                    * objectClass  // Collapse class applied to trigger element || ex: "b--btn-X--is-active"
                    */
                    objectId : element, 
                    objectClass : element.getAttribute('data-self-class') 
                    
                };
                /* @ NEED TO VALIDATE ARGUMENTS AT SOME POINT */
                this.collapseEvent(collapseArg)
            })
        })
    }
    /*
     * targetID
     * targetClass
     * objectTrigger
     */
    collapseEvent(payload){
        
        if(!document.getElementById(payload.targetID).classList.contains(payload.targetClass)){
            const getHeight = document.getElementById(payload.targetID).scrollHeight;
            this.jsutil.addStyle(document.getElementById(payload.targetID),'height',`auto`);
        }else{
            this.jsutil.addStyle(document.getElementById(payload.targetID),'height','0px');
        }
        // apply class to b--collapse
        this.jsutil.toggleClass(document.getElementById(payload.targetID),payload.targetClass)
        // apply class to trigger element    
        this.jsutil.toggleClass(payload.objectId,payload.objectClass)
    }

}
export default Collapse;   