$("form").on("submit", createYard);
$("table").on("click", "td", playGame);

function createYard(event) {
    event.preventDefault();

    //get size of yard from input
    let yardSize = Number( $("input#yard").val() );

    //create yard with x rows and x columns of cells
    let table = $("table#digYard");
    let totalBones = 0;

    for (let tr = 1; tr <= yardSize; tr++) {
        let row = table.append("<tr>");
        for (let td = 1; td <= yardSize; td++) {
            //there is a 30% chance that it will also be given the class hidden-bone
            let boneHidden = Math.random();

            //count the number of bones placed
            //change the <td> id to verify which ones have a bone
            if (boneHidden <= 0.30) {
                totalBones++;
                row.append(`<td class="undug_hasBone"></td>`);
            } else {
                row.append(`<td class="undug_noBone"></td>`);
            }
        }
    }
    //display the total number of bones to be found
    $("p#status").text(`Bones Remaining: ${totalBones}`);
    return totalBones;
}

function playGame(event, totalBones) {
    event.preventDefault();

    if ( $(event.target).hasClass("undug_hasBone") ) {
        $(event.target).removeClass("undug_hasBone").addClass("dug-bone");
        totalBones--;
        $("p#status").text(`Bones Remaining: ${totalBones}`);

    } else {
        $(event.target).removeClass("undug_noBone").addClass("dug");
    }
}
