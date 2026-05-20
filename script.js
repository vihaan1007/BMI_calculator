let b = document.querySelector("#b");

b.addEventListener("click", () => {

    const weight = document.querySelector("#w").value.toLowerCase();
    const height = document.querySelector("#h").value.toLowerCase();

    let w = parseFloat(weight);
    let h = parseFloat(height);

    // ---------- WEIGHT TO KG ----------

    if (weight.endsWith("quinton")) {
        w *= 100;
    }
    else if (weight.endsWith("hg")) {
        w /= 10;
    }
    else if (weight.endsWith("dag")) {
        w /= 100;
    }
    else if (weight.endsWith("gg")) {
        w /= 1_000;
    }
    else if (weight.endsWith("dg")) {
        w /= 10_000;
    }
    else if (weight.endsWith("cg")) {
        w /= 100_000;
    }
    else if (weight.endsWith("mg")) {
        w /= 1_000_000;
    }
    else if (weight.endsWith("ng")) {
        w /= 1_000_000_000;
    }
    else {
        alert("Weight counted as kg.");
    }

    // ---------- HEIGHT TO METERS ----------

    if (height.endsWith("km")) {
        h *= 1000;
    }
    else if (height.endsWith("hm")) {
        h *= 100;
    }
    else if (height.endsWith("dam")) {
        h *= 10;
    }
    else if (height.endsWith("dm")) {
        h /= 10;
    }
    else if (height.endsWith("cm")) {
        h /= 100;
    }
    else if (height.endsWith("mm")) {
        h /= 1000;
    }
    else if (height.endsWith("nm")) {
        h /= 1_000_000_000;
    } else{
        alert("Height counted as meters.");
    };

    let c = "";
    let ans = document.querySelector("#Answer"); 
    let cat = document.querySelector("#Category"); 
    const BMI = eval(w / (h ** 2));
    const Res = BMI.toFixed(1);

    if(BMI < 18.6) {
        c = "underWeight";
        cat.style.color = "#ff9f43";
        cat.innerHTML = c;
    } else if(BMI < 25 && BMI > 18.5) {
        c = "normal";
        cat.style.color = "#7bc9a8";
        cat.innerHTML = c;
    } else if(BMI < 30 && BMI > 24.9) {
        c = "overWeight";
        cat.style.color = "#ffd166";
        cat.innerHTML = c;
    } else if(BMI > 29) {
        c = "obese";
        cat.style.color = "#ff4d4d"
        cat.innerHTML = c;
    };

    ans.innerHTML = Res;
});
/*
Category	Color	Meaning
Underweight	#ff9f43	warning
Normal	    #7bc9a8	healthy
Overweight	#ffd166	caution/neutral
Obese	    #ff4d4d	danger
*/ 