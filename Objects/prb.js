const employees = {
    1109 :{
        name : "bhavana",
        id : '1109',
        companies : ["comp1"]
     },
    500 :{
        name : "javascript",
        id : '500',
        companies : ["comp1","comp2"]
     },
}
const companyDetails = {
    comp1 : {
        name: 'full',
        address: 'in',
        workingHours: '9',
    },
    comp2 : {
        name: 'AW',
        address: 'us',
        workingHours: '10',
    },
}
const office = {
    getCompanyName : function(name){
        return companyDetails[name].name;
    
    },
    addemployee(name,id, ...comp){
        if(Object.hasOwn(employees,id))
        {
            employees[id].companies.push(...comp.map(ele => 
                {
                   return this.getCompId(ele)
                }
            ))
            return;
        }
        employees[id] = { name, id, companies : comp.map(ele => this.getCompId(ele))}
    },
    
    getEmployeeNameById : function(id){
        return employees[id].name
    },
    updateEmpNameById(id,newName){
        employees[id].name = newName;
    },
    removeCompany(id, cmpName){
        const cmpId = this.getCompId(cmpName);
        const index = employees[id].companies.indexOf(cmpId)
        employees[id].companies.splice(index,1);   
    },
    getCompId(ele){
        
        for(const [k,v] of Object.entries(companyDetails)){
            if(v.name === ele)
                return k;
            
        }
        return;
    }
    
}
office.addemployee("newEmp","501", "full","AW")
console.log(employees)
office.removeCompany("500","full")
console.log(employees)
