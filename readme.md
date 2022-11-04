# Day1 

-- oops language 
```
    class Employee {
        // instance variable 
        // methods / function 
    }
```


-- javascript 
```
    function Employee(empid, name) {
        this.empid = empid; 
        this.name = name; 
    }

    // this is possible  - es6 
    class Employee {
        int empid; // nooo 
        constructor(empid, name) {
            this.empid = empid; 
            this.name = name;
        }
    }
```

- in javascript constructor is called constructor only you cannot have class name this is valid in java, c++, python.... 
- in javascript there is no concept of overloading 

```
    function hi() {}
    function hi(name) {}
    function hi(empid, name) {} - overrite 

    hi(); 
    hi("Abdulla");
    hi(101, "Abdulla");
```

- transpiler 
```
    // before running the transpiler
    height = height ?? 100;

    // after running the transpiler
    height = (height !== undefined && height !== null) ? height : 100;
```

- java - but it has thick wrapper 
- python - is also same as java + script type
- javascrpit - scripting language, no compilation, it definately takes time and unpretected 
- php - web application develop 

- 'C' - to become very very very fast 


- hoisting 

```
    fnAdd(10,20)
    function fnAdd(x, y) {
        return x + y; 
    }

    // in arrow style 
   let  fnAdd =  (x, y) =>  {
        return x + y; 
    }

    // better style
    // in arrow style, since its function last statement is always returned 
   let  fnAdd =  (x, y) => x + y;  
```





- Links 

> https://todomvc.com/

- es6 
> https://kangax.github.io/compat-table/es6/
