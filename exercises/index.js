localStorage.setItem("workouts", JSON.stringify([
/* Cardio */["Shuttle runs", "Toe taps", "Jogs and squats", "Burpees", "Sprints", "Squat jumps"],
/* Core */ ["Plank", "Stomach crunches", "Foot switches", "Toe touches on back", "Side plank"],
/* Legs */ ["Lunges", "Lunge backwards and forwards same leg", "Lunge - body twist each side", "Side lunges"]]));

function generateExercises(numberOfGroups) {
    var workouts =JSON.parse(localStorage.getItem("workouts"));
    var finalGroups = [];
    for (let i = 0; i < numberOfGroups; i++) {
        finalGroups.push([]);
        workouts.forEach((workout) => {
            finalGroups[i].push(getItem(workout));
        });
    }

    var template = document.getElementById('simple').innerHTML;
    var view = {items: finalGroups};
    var rendered = Mustache.to_html(template, view);
    document.getElementById('target').innerHTML = rendered;

    return finalGroups;
}

function getItem(group) {
    var index = generateIndex(group.length);
    var exercises = { exercise: group[index] };
    group.splice(index, 1);
    return exercises;
}

function generateIndex(max) {
    return Math.floor(Math.random() * max);
}

generateExercises(3);