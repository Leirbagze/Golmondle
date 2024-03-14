import csv, random

csv_data = [
["Golmon", "sexe", "QI(%)", "racisme", "rank babyfoot", "humour", "DC (kg)"],
["Yan", "masculin", "84", "70", "5", "gênant", "72"],
["Sylvain", "masculin", "130", "40", "6", "solide", "40"],
["Gabriel", "masculin", "150", "80", "4", "😐", "8"],
["Paul", "masculin", "90", "76", "1", "suicide", "100"],
["Gabin", "masculin", "75", "94", "2", "masterclass", "80"],
["Clémentine", "masculin", "120", "79", "7", "😐", "65"],
["Etienne", "masculin", "135", "15", "8", "solide", "40"],
["Rayan", "masculin", "2", "9", "3", "solide", "90"],
["Mael", "masculin", "115", "65", "10", "gênant", "90"],
["Quentin", "masculin", "95", "100", "9", "gênant", "90"]
]



def faux(csv_data):
    global index
    print("Prenom différent")
    QI(csv_data)
    DC(csv_data)
    rank_babyfoot(csv_data)
    racisme(csv_data)
    sexe(csv_data)
    humour(csv_data)

def sexe(csv_data):
    global index,answer
    if(csv_data[index][1]!=answer[1]):
        print("sexe différent")
    else:
        print("même sexe")

def humour(csv_data):
    global index,answer
    if(csv_data[index][5]!=answer[5]):
        print("humour différent")
    else:
        print("même humour")

def racisme(csv_data):
    global index,answer
    if int(csv_data[index][3]) > int(answer[3]):
        print("racisme -")
    else:
        print("racisme +")


def rank_babyfoot(csv_data):
    global index,answer
    if int(csv_data[index][4]) < int(answer[4]):
        print("rank babyfoot -")
    else:
        print("rank babyfoot +")

def DC(csv_data):
    global index,answer
    if int(csv_data[index][6]) > int(answer[6]):
        print("DC -")
    else:
        print("DC +")

def QI(csv_data):
    global index,answer
    if int(csv_data[index][2]) > int(answer[2]):
        print("QI -")
    else:
        print("Qi +")


def jeu(csv_data,verif):
    global index,answer
    for i, row in enumerate(csv_data):
        if verif == row[0]:
            index = i
            break
    if index == None:
        print("Le joueur n'est pas dans les données CSV.")
        return
    while verif != answer[0]:
        print("Dommage, mauvaise reponse")
        faux(csv_data)
        print("\nQui est-ce ?")
        verif = input()
        jeu(csv_data,verif) 

def main(csv_data):
    global index,answer
    index=None
    answer=random.choice(csv_data[1:])
    print("Qui est-ce ?")
    verif = input()
    jeu(csv_data,verif)
    print("Bien joué")


main(csv_data)
