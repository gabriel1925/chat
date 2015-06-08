if (Meteor.isServer) {
  Meteor.publish('mensajes', function () {
    return Mensajes.find()
  })
}