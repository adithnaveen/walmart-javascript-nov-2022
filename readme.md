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

```
-- callback 

function divide(n1, n2, callback) {

    if (typeof callback != 'function') {
        throw "Callback should be a function or you did not pass";
    }
    setTimeout(() => {
        if (typeof n1 != 'number') {
            callback("Please Enter first arg as number");
            return;
        }
        if (typeof n2 != 'number') {
            callback("Please enter second arg as number");
            return;
        }
        if (n2 === 0) {
            callback("Pls dont divide by zero");
            return;
        }

        callback(null, n1 / n2);
    }, 0);

}

```

- scoping 

```
    {
        int x; 
        {
            int y; 
            print x 
        }
        {
            int z; 
            print x; 
            print y; does not work 
        }
    }

    function f1 (val1) {
        function f2 (val2) {
            val2 is valid 
            val1 is also valid 
        }
    }


```

- Links 

> https://todomvc.com/

- es6 
> https://kangax.github.io/compat-table/es6/

- mock server json-server 
> https://www.npmjs.com/package/json-server