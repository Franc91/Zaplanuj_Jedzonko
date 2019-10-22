document.addEventListener('DOMContentLoaded', function () {

    var addRecipesBtn = document.querySelector('.addRecipe');
    var addRecipeBtn2 = document.querySelector('.addRcpBtn');
    var addRecipesPage = document.querySelector('.add');
    var recipes = document.querySelector('#recipes');
    var plans = document.querySelector('#plans');
    var pulpit = document.querySelector('.pulpit');
    var pulpitI = pulpit.querySelector('i');
    var przepisy = document.querySelector('.przepisy');
    var przepisyI = przepisy.querySelector('i');
    var plany = document.querySelector('.plany');
    var planyI = plany.querySelector('i');
    var newUserBtn = document.querySelector('#newUserBtn');
    var newUser = document.querySelector('#newUser');
    var content = document.querySelector('.content');
    var screen = document.querySelector('.screen');
    var name = document.querySelector(".name");
    var numRecipes = document.querySelector('#numRecipes');


    // pobranie i zmiana imienia

    newUserBtn.addEventListener('click', saveNewUser);

    function saveNewUser(event){
        event.preventDefault();
        if(newUser.value === ""){
            newUserBtn.disabled.toggle = true;
            alert("Musisz podać imię dziku");
        }else{
            newUserBtn.disabled.toggle = false;
            localStorage.setItem("UserName", newUser.value);
            content.style.display = "none";
            screen.style.display = "block";
            if (localStorage.getItem("UserName") == null){
                name.innerHTML
            }else{
                name.innerHTML = localStorage.getItem("UserName");
                name.style.textTransform = "capitalize";
            }
        }
    }

    if(localStorage.getItem("UserName")!= null){
        content.style.display = "none";
        screen.style.display = "block";
        name.innerHTML = localStorage.getItem("UserName");
            name.style.textTransform = "capitalize";
    }

    // menu

    przepisyI.style.display = 'none';
    planyI.style.display = 'none';

    pulpit.addEventListener('click', pulpitClick);

    przepisy.addEventListener('click', przepisyClick);

    plany.addEventListener('click', planyClick);

    function pulpitClick (event) {
        content.style.display = 'none';
        screen.style.display = 'block';
        addRecipesPage.style.display = 'none';
        addNewPlanPage.style.display = 'none';
        recipes.style.display = 'none';
        plans.style.display = 'none';
        addPlan.style ='none';
        if (!pulpit.classList.contains('highlight')) {
            pulpit.classList.add('highlight');
            pulpitI.style.display = 'block';
            przepisy.classList.remove('highlight');
            przepisyI.style.display = 'none';
            plany.classList.remove('highlight');
            planyI.style.display = 'none';
        }
    }

    function przepisyClick (event) {
        recipes.style.display = 'block';
        screen.style.display = 'none';
        content.style.display = 'none';
        addNewPlanPage.style.display = 'none';
        addRecipesPage.style.display = 'none';
        plans.style.display = 'none';
        addPlan.style ='none';
        if (!przepisy.classList.contains('highlight')) {
            przepisy.classList.add('highlight');
            przepisyI.style.display = 'block';
            pulpit.classList.remove('highlight');
            pulpitI.style.display = 'none';
            plany.classList.remove('highlight');
            planyI.style.display = 'none';
        }
    }

    function planyClick (event) {
        plans.style.display = 'block';
        recipes.style.display = 'none';
        screen.style.display = 'none';
        addNewPlanPage.style.display = 'none';
        content.style.display = 'none';
        addRecipesPage.style.display = 'none';
        addPlan.style ='none';
        if (!plany.classList.contains('highlight')) {
            plany.classList.add('highlight');
            planyI.style.display = 'block';
            pulpit.classList.remove('highlight');
            pulpitI.style.display = 'none';
            przepisy.classList.remove('highlight');
            przepisyI.style.display = 'none';
        }
    }

    //add recipes

    addRecipeBtn2.addEventListener('click', addRecipes);
    addRecipesBtn.addEventListener('click', addRecipes);

    function addRecipes(event){
        content.style.display = 'none';
        screen.style.display = "none";
        recipes.style.display = 'none';
        addRecipesPage.style.display = "block";
    };

    //dodawanie kroków
    var addStepBtn = document.querySelector("#step-add-btn")
    var step = document.querySelector(".instruction");
    var addIngridientBtn = document.querySelector("#ingridient-add-btn");
    var ingridient = document.querySelector('.ingridients');

    //dodawanie ikon  kosza i edycji
    function createIcon(color, name, size, padding, className, parentEl, nameOfEvent){
        var btn = document.createElement("i");
        btn.classList.add('far');
        btn.classList.add(name);
        btn.style.fontSize = size;
        btn.style.color = color;
        var bigBtn = document.createElement("a");
        bigBtn.href="#";
        bigBtn.appendChild(btn);
        parentEl.appendChild(bigBtn);
        bigBtn.style.padding = padding;
        bigBtn.classList.add(className);
    };

    //funkcja odpowiadajaca za edycje
    function editLi(event){
            if(this.previousSibling.contentEditable != "true"){
                this.previousSibling.contentEditable = "true";
            }else{
                this.previousSibling.contentEditable = "false"
            }
    };
    //funckcja odpowadająca za usuwanie
    function delLi(event){
        this.parentNode.parentNode.removeChild(this.parentNode);
    };

    function createNewSteps(step){
        var newStep = document.createElement("li");
        var contentLi = document.createElement('span');
        contentLi.contentEditable = "false";
        contentLi.innerText = step;
        newStep.appendChild(contentLi);
        listOfStepsRecipe.appendChild(newStep);

        createIcon ('#FFB03B','fa-edit', '16px',"10px","edit", newStep, editLi);
        createIcon('#BD4932','fa-trash-alt', '16px',"10px","del",newStep);
        var editBtn1 = document.querySelectorAll('.edit');
        var delBtn1 = document.querySelectorAll('.del');

        editBtn1.forEach(function(i){
            i.addEventListener('click', editLi);
        })
        delBtn1.forEach(function(i){
            i.addEventListener('click', delLi);
        });

      
    };

    function createNewIngridient(ingridient){
                    //tworzenie nowego li do list 
        var newIngridient = document.createElement("li");
        var contentLi = document.createElement('span');
        contentLi.contentEditable = "false";
        contentLi.innerText = ingridient;
        newIngridient.appendChild(contentLi);
        listOfIngridients.appendChild(newIngridient);

    //tworzenie przycisków edytowania;

        createIcon ("#FFB03B",'fa-edit', '16px',"10px","editIngrid", newIngridient);
        createIcon  ("#BD4932",'fa-trash-alt', '16px',"10px","delIngrid",newIngridient);
        var editBtn = document.querySelectorAll('.editIngrid');
        var delBtn = document.querySelectorAll('.delIngrid');

        editBtn.forEach(function(x){
            x.addEventListener('click', editLi);
        })
        delBtn.forEach(function(x){
            x.addEventListener('click', delLi);
        });

    };


    //funkcja dodawania nowych li po kliknieciu w przycisk
    function addNewIngridient(event){
        event.preventDefault();
        newRecipe.ingridients.push(ingridient.value);
        createNewIngridient(ingridient.value);

    }
    function addNewStep(event){
        event.preventDefault();
        newRecipe.steps.push(step.value);
        createNewSteps(step.value);
    }
  

    addIngridientBtn.addEventListener('click',addNewIngridient);
    addStepBtn.addEventListener('click', addNewStep);



    var saveAndCloseBTN = document.querySelector("#new-recipe-btn");
    var nameRecipe = document.querySelector("#name-recipe");
    var dirscriptionRecipe = document.querySelector(".discrption-recipe");
    var listOfStepsRecipe = document.querySelector('#instruction-steps');
    var listOfStepsRecipeValid = Array.from(listOfStepsRecipe.children);
    var listOfIngridients = document.querySelector("#list-of-ingridients");
    var listOfIngridientsValid = Array.from(listOfIngridients.children);
    var elListOfStepsRecipe = document.querySelectorAll('#instruction-steps li');


    //tworzenie obiektu zawierającego caly przepis

    var newRecipe = {
        name:"",
        discription:"",
        steps: [],
        ingridients:[]
    }

    //zapisywanie przepisu

    function saveRecipe(newObj){
    var dataFromLocalStorage = [];
    if (localStorage.getItem("newRecipe") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("newRecipe"));
        dataFromLocalStorage.push(newObj);
        localStorage.setItem("newRecipe", JSON.stringify(dataFromLocalStorage));
        }else{
        dataFromLocalStorage.push(newObj);
        localStorage.setItem("newRecipe", JSON.stringify(dataFromLocalStorage));
        }
        alert("Dziku twój przepis został zapisany");
}
var formRecipe = document.querySelector("#new-recipes");
    function saveRecipeLocalStorage(event){
        event.preventDefault();
        if (nameRecipe.value === "" || dirscriptionRecipe.value === "" || listOfStepsRecipeValid.length === [] || listOfIngridientsValid.length=== []){
            saveAndCloseBTN.disabled.toggle = true;
            alert("Zawiodłeś mnie dziku nie wypełniłeś wszystkich pól");
        }else{
            saveAndCloseBTN.disabled.toggle = false;
            newRecipe.name = nameRecipe.value;
            newRecipe.discription = dirscriptionRecipe.value;
            saveRecipe(newRecipe);
            screen.style.display = "block";
            addRecipesPage.style.display = "none";
            formRecipe.reset();            
        };
    }
    saveAndCloseBTN.addEventListener('click', saveRecipeLocalStorage);

    // wyświetlanie przepisów na stronie

    var recipesContent = document.querySelector('.recipesContent');

    function renderAllRecipes() {
        var allRecipes = JSON.parse(localStorage.getItem('newRecipe'));
        recipesContent.innerHTML = '';
        allRecipes.forEach(function (recipe) {
            var newRecipei = document.createElement('div');
            recipesContent.appendChild(newRecipei);
            newRecipei.classList.add('przepis');
            var newId = document.createElement('div');
            newId.innerText = allRecipes.indexOf(recipe) + 1;
            newRecipei.appendChild(newId);
            newId.classList.add('recipeId');
            var newName = document.createElement('div');
            newName.innerText = recipe.name;
            newRecipei.appendChild(newName);
            newName.classList.add('recipeName');
            var newDescription = document.createElement('div');
            newDescription.innerText = recipe.discription;
            newRecipei.appendChild(newDescription);
            newDescription.classList.add('recipeDescription');
            var newAction = document.createElement('div');
            newRecipei.appendChild(newAction);
            newAction.classList.add('recipeAction');
            newAction.innerHTML = '<i class="far fa-edit"></i><i class="far fa-trash-alt"></i>';
        });
        numRecipes.innerText = allRecipes.length;
    }

    przepisy.addEventListener('click', renderAllRecipes);
    saveAndCloseBTN.addEventListener('click', renderAllRecipes);

    // pokazywanie ile masz przepisów
    
    var allRecipe= JSON.parse(localStorage.getItem('newRecipe'));
    numRecipes.innerText = allRecipe.length;
    
    //dodawnie planu

    var addPlanBtn = document.querySelector('.addPlan');
    var addNewPlanPage = document.querySelector('.addNewPlan');
    var newAddPl = document.querySelector('.addPlnBtn');

    addPlanBtn.addEventListener('click', addPlan);
    newAddPl.addEventListener('click', addPlan);

    function addPlan(event){
        content.style.display = 'none';
        screen.style.display = "none";
        recipes.style.display = 'none';
        plans.style.display = 'none';
        addNewPlanPage.style.display = 'block';
    }


    // wybór opcji w planie

    var selectOptions = document.querySelectorAll('.selectOption');
    var selects = [];
    selectOptions.forEach(function (select) {
        selects.push(select);
    });

    selects.forEach(function (select) {
        allRecipe.forEach(function (recipe) {
            var option = document.createElement('option');
            select.appendChild(option);
            option.innerText = recipe.name;
        })
    });

    var monday = document.querySelectorAll('.monday .meal select option');
    var tuesday = document.querySelectorAll('.tuesday .meal select option');
    var wednesday = document.querySelectorAll('.wednesday .meal select option');
    var thursday = document.querySelectorAll('.thursday .meal select option');
    var friday = document.querySelectorAll('.friday .meal select option');
    var sunday = document.querySelectorAll('.saturday .meal select option');
    var saturday = document.querySelectorAll('.sunday .meal select option');
    var namePlan = document.querySelector('#name-plan');
    var descriptionPlan = document.querySelector('.discrption-plan');
    var weekNum = document.querySelector('#num-of-week');
    var meal=document.querySelectorAll('.meal select option');


    var newPlan={
        name: '',
        discription:'',
        weekNumber: '',
        monday:[],
        tuesday: [],
        wednesday: [],
        thursday:[],
        friday:[],
        saturday:[],
        sunday:[]
    };

        console.log(newPlan);


    var saveAndClosePlanBTN = document.querySelector('#new-plan-btn');
    var formPlan = document.querySelector('#new-plans');
    
    function savePlanLocalStorage(event){
        event.preventDefault();
        if (namePlan.value === "" || descriptionPlan.value === ""|| weekNum == ""){
            saveAndClosePlanBTN.disabled.toggle = true;
            alert("Zawiodłeś mnie dziku nie wypełniłeś wszystkich pól");
        }
        else {
            saveAndClosePlanBTN.disabled.toggle = false;
            newPlan.name = namePlan.value;
            newPlan.discription = descriptionPlan.value;
            newPlan.weekNumber = weekNum.value;
            monday.forEach(function(i){
                if (i.selected){
                    newPlan.monday.push(i.value);
                }
            });
            tuesday.forEach(function(i){
                if (i.selected){
                newPlan.tuesday.push(i.value);
                }
            });
            wednesday.forEach(function(i){
                if (i.selected){
                newPlan.wednesday.push(i.value);
                }
            });
            thursday.forEach(function(i){
                if (i.selected){
                newPlan.thursday.push(i.value);
                }
            });
            friday.forEach(function(i){
                if (i.selected){
                newPlan.friday.push(i.value);
                }
            });
            saturday.forEach(function(i){
                if (i.selected){
                newPlan.saturday.push(i.value);
                }
            });
            sunday.forEach(function(i){
                if (i.selected){
                newPlan.sunday.push(i.value);
                }
            });
            screen.style.display = "block";
            addNewPlanPage.style.display = "none";
            savePlanObj(newPlan);
            formPlan.reset();            
        }
    }

    function savePlanObj(newObj){
        var dataFromLocalStorage = [];
        if (localStorage.getItem("newPlan") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("newPlan"));
            dataFromLocalStorage.push(newObj);
            localStorage.setItem("newPlan", JSON.stringify(dataFromLocalStorage));
        }else{
            dataFromLocalStorage.push(newObj);
            localStorage.setItem("newPlan", JSON.stringify(dataFromLocalStorage));
        }
        alert("Dziku twój plan został zapisany");
        }

        saveAndClosePlanBTN.addEventListener('click', savePlanLocalStorage);

    // wyświetlanie planu

    var plansContent = document.querySelector('.plansContent');
    console.log(plansContent);

    function renderAllPlan() {
        var allPlans = JSON.parse(localStorage.getItem('newPlan'));
        plansContent.innerHTML = '';
        console.log(allPlans);
        allPlans.forEach(function (plan) {
            var newPlani = document.createElement('div');
            plansContent.appendChild(newPlani);
            newPlani.classList.add('plan');
            var newPlanId = document.createElement('div');
            newPlanId.innerText = allPlans.indexOf(plan) + 1;
            newPlani.appendChild(newPlanId);
            newPlanId.classList.add('planId');
            var newName = document.createElement('div');
            newName.innerText = plan.name;
            newPlani.appendChild(newName);
            newName.classList.add('planName');
            var discriptionPlan = document.createElement('div');
            discriptionPlan.innerText = plan.discription;
            newPlani.appendChild(discriptionPlan);
            discriptionPlan.classList.add('planDescription');
            var weeknumPlan = document.createElement('div');
            weeknumPlan.innerText = plan.weekNumber;
            newPlani.appendChild(weeknumPlan);
            weeknumPlan.classList.add('planWeek');
            var newAction = document.createElement('div');
            newPlani.appendChild(newAction);
            newAction.classList.add('planAction');
            newAction.innerHTML = '<i class="far fa-edit"></i><i class="far fa-trash-alt"></i>';
        });
    }

    plany.addEventListener('click', renderAllPlan);
    
});