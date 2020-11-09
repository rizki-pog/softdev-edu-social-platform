#basic users class implementation as a proof of concept
#creating function that allows users to login or register
#in the future we plan to actually build it using PHP and MySQL server databases
#ugm softdev lab project UML class diagrams Implementation

userID = {}
prompt = ""

#basic user prompt
def loginPrompt():
    prompt = input("Are you registered user? y/n? \nPress q to quit ")
    if prompt == "y":
        login()
    elif prompt == "n":
        register()

#creating login() class function
def login():
    username = input("Enter username: ")
    password = input("Enter password: ")

    if username in userID and userID[username] == password:
        print("\nLogin successful. Welcome",username,"\n")
    else:
        print("\nUser doesn't exist or wrong password!\n")

#creating register() class function
def register():
    register = input("Create username: ")
    #validation step to make sure userID is not used
    if register in userID:
        print("\nSorry! But that username already exists!\n")
    else:
        newPassword = input("Create password: ")
        userID[register] = newPassword
        print("\nUser registered!\n")


while prompt != "q":
    loginPrompt()