localStorage.setItem("workouts", JSON.stringify([
        ["shuttle runs", "toe taps", "jogs and squats", "burpees", "sprints"],
        ["plank", "stomach crunches", "foot switches", "toe touches on back"],
        ["lunges", "be", "great", "nope"]]));

function generateExercises(numberOfGroups) {
    var workouts =JSON.parse(localStorage.getItem("workouts"));
    var finalGroups = [];
    for (let i = 0; i < numberOfGroups; i++) {
        finalGroups.push([]);
        workouts.forEach((workout, w) => {
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