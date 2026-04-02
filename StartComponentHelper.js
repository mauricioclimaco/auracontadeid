({
    createAccount : function(component, event, helper) {
        var conta = component.get('v.conta');
        var action = component.get('c.createAccount');
        
        action.setParams({
            acc : conta
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(state === "SUCCESS"){
                var accId = response.getReturnValue(); // Variável corrigida
                component.set('v.retorno', 'A conta de Id: ' + accId + ' foi criada com sucesso!');
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        });
        
        $A.enqueueAction(action);
    }
})
