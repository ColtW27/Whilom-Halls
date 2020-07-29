# json.set! @user.id do
  json.extract! @user, :id ,:email, :first_name, :last_name
  if @user.profile_picture.attached?
    json.photoUrl url_for(@user.profile_picture)
  end
# end