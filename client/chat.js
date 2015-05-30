Mensajes = new Mongo.Collection('mensajes')

if (Meteor.isClient){
  Template.chat.helpers({
   mensajes: function (){
    return Mensajes.find({}, { sort: { fecha: 1 } })
   }  
  })

  Template.chat.events({
    'submit': function (event){
      event.preventDefault()

      var $mensaje = $('#mensaje')
      var textito = $('#mensaje').val().trim()

      if (textito){
      Mensajes.insert({texto: $mensaje.val(), fecha: new Date})
      $mensaje.val('').focus()
      }
    },
    'click [data-delete]': function (){
      Mensajes.remove(this._id)
    }
    
  })
  Template.momentos.helpers({
    fecha: function () {
      return moment(this.fecha).calendar()
    }
  })

}
