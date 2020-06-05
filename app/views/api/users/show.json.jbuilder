json.set! @user.id do
<<<<<<< HEAD
  json.extract! @user, :id, :username
=======
  json.extract! @user, :id ,:email
>>>>>>> auth
end