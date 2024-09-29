const month = 3;




switch (month) {
    case 0:
        console.log("This is not a month");
        
        break;

        case 3:
            console.log("This is a month");
            break;

    default:
        console.log("ERROR");
        
        break;
}

const emptyOBJ = {};

if (Object.keys(emptyOBJ).length === 0) {
    console.log("This object is empty");
}

const IceTeaPrice = 100;

IceTeaPrice >= 90 ? console.log("It is affoedable") : console.log("It is not affordble");

