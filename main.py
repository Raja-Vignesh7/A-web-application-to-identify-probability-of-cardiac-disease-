import joblib

class Model:
    # get cholesterol
    def cholesterolLevel(value):
        if(value<200):
            return 0
        elif value>=200 and value<=239:
            return 1
        else:
            return 2
    # get glucose level
    def glucLevel(value):
        if value>=70 and value<100:
            return 0
        elif value>=100 and value<126:
            return 1
        else:
            return 2
    
    def getBMI(hight,weight):
        return (weight)/(hight*hight)
    
    def predict(L):
        res = []
        model = joblib.load('cardio_disease_prob')
        res.append(L[0]) # age index-0
        res.append(L[3]) # ap_hi index-1
        res.append(L[4]) # ap_lo index-2
        
        cholesterol = Model.cholesterolLevel(L[5])
        res.append(cholesterol) # cholesterol index-3
       
        glucose = Model.glucLevel(L[6])
        res.append(glucose)# gluc index-4
        
        BMI = Model.getBMI(L[1],L[2])
        res.append(BMI) # BMI   index-5
        
        result = model.predict_proba([res])
        # print(result[0,:])
        return round(result[0,1],3)

# print(Model.predict([59,151,67,120,80,1,1]))