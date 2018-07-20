sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function(Controller, UIComponent, History) {
	"use strict";

	return Controller.extend("com.treinamento.demoRouter1.controller.View1", {

		onPress: function(oEvent){
			
			var oRouter = this.getOwnerComponent().getRouter(); 
			// OU var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("t_view2");
		}	

	});

});