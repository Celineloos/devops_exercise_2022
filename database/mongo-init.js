db.createUser({
  user: "root",
  pwd: "example",
  roles: [ { role: "dbOwner", db: "devops_db" } ]
})

db.users.insert({
  name: "admin"
})