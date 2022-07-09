export default function validateInfo(values) {
  let errors = {isError: false};
  /*if (!values.name) {
    errors.name = 'Hãy nhập Họ và tên';
    alert("Hãy nhập Họ và tên");
    errors.isError = true;
  }  
  else if (!values.gender) {
    errors.gender = 'Hãy chọn giới tính';
    alert("Hãy chọn giới tính");
     errors.isError = true;
  }*/
  if (!values.username) {
    errors.username = 'Hãy nhập Tên đăng nhập';
    alert("Hãy nhập Tên đăng nhập");
     errors.isError = true;
  }
  /*else if (!values.username.trim()) {
    errors.username = 'Hãy nhập Tên đăng nhập';
     errors.isError = true;
  }*/
  else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    errors.username = 'Invalid username!';
    alert("Invalid username!");
     errors.isError = true;
  }

  /*else if (!values.email) {
    errors.email = 'Hãy nhập Email';
    alert("Hãy nhập Email");
     errors.isError = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email không hợp lệ';
    alert("Email không hợp lệ");
     errors.isError = true;
  }*/
  else if (!values.password) {
    errors.password = 'Please enter password!';
    alert("Please enter password!");
     errors.isError = true;
  } else if (values.password.length < 6) {
    errors.password = 'Password must contain at least 6 characters!';
    alert("Password must contain at least 6 characters!");
     errors.isError = true;
  }

  else if (!values.password2) {
    errors.password2 = 'Please enter password again!';
    alert("Please enter password again!");
     errors.isError = true;
  } else if (values.password2 !== values.password) {
    errors.password2 = '';
    alert("Those passwords didn't match!");
     errors.isError = true;
  }
  return errors;
}
