function submitForm(form) {
    var xhttp = new XMLHttpRequest();

    var encodedValues = "name=" + encodeURIComponent(form.name.value) + "&email=" + encodeURIComponent(form
        .email.value);
    alert("Hi " + form.name.value + ", I'll contact you when the new products are ready.  Thanks, Sue.");
    xhttp.open("POST", "https://bm35u3aeji.execute-api.eu-west-2.amazonaws.com/Prod/register/", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(encodedValues);
}