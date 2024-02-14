function validateForm() {
  const name = document.forms.RegForm.Name.value;
  const email = document.forms.RegForm.EMail.value;
  const what = document.forms.RegForm.Course.value;
  const password = document.forms.RegForm.Password.value;
  const rePassword = document.forms.RegForm.rePassword.value;
  const address = document.forms.RegForm.Address.value;
  console.log(name, email, what, password, address);

  if (name === "" || name == null) {
    window.alert("Name Field is Required");
    return false;
  }

  if (address === "") {
    window.alert("Please enter your address.");
    return false;
  }
  if (email === "" || !email.includes("@")) {
    window.alert("Please enter a valid e-mail address.");
    return false;
  }

  if (password === "") {
    alert("Please enter your password");
    return false;
  }

  if (password.length < 6) {
    alert("Password should be atleast 6 character long");
    return false;
  }
  if (password !== rePassword) {
    alert("Password Does Not Matched");
    return false;
  }

  if (what.selectedIndex === -1) {
    alert("Please enter your course.");
    return false;
  }

  return true;
}
