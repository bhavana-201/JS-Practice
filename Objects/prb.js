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
    getCompanyName : function(id){
        return companyDetails[id].name;
    
    },
    addemployee(name,id, ...comp){
        if(Object.hasOwn(employees,id)){
            employees[id].companies.push(...comp.map(ele => this.getCompId(ele)))
            return;
        }
        employees[id] = {name,id,companies : [...comp]}
        
    },
    getEmployeeNameById : function(id){
        return employees[id].name
    },
    updateEmpNameById(id,newName){
        employees[id].name = newName;
    },
    removeCompany(id, name){
        
    },
    getCompId(ele){
        for(const [k,v] of Object.entries(companyDetails)){
            if(v[name] === )
        }
        
        return;
    }
    
}
console.log(office.getCompanyName("comp1"))
console.log(office.getEmployeeNameById("500"))
employees.addemployee("javascript","501", "full","AW")
office.updateEmpNameById("500","abcs")
employees
