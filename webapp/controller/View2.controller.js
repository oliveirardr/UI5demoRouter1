sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History" //Histórico de mudanças de HASH
], function(Controller, UIComponent, History) {
	"use strict";

	return Controller.extend("com.treinamento.demoRouter1.controller.View2", {

		navBack: function(){
		
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// OU var oRouter = this.getOwnerComponent().getRouter(); 
			
			oRouter.navTo("t_view2");
				
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				oRouter.navTo("t_view1", true);
			}	
				
				
		}
	});

});