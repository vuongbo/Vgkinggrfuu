$(document).ready(function () {
    // Lấy dữ liệu thành viên từ localStorage nếu có
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Hiển thị danh sách thành viên
    function displayMembers() {
      var memberTable = $('#memberList');
      memberTable.empty();
      users.forEach(function(user) {
        var row = $('<tr>');
        row.append('<td>' + user.fullName + '</td>');
        row.append('<td>' + user.username + '</td>');
        row.append('<td>' + user.email + '</td>');
        row.append('<td>' + user.phone + '</td>');
        row.append('<td>' + user.dob + '</td>');
        row.append('<td>' + user.address + '</td>');
        row.append('<td>' + user.password + '</td>');
        memberTable.append(row);
      });
    }

    displayMembers();

    $('#registerForm').submit(function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        var formData = $(this).serializeArray();
        var userObject = {};
        $.each(formData, function (i, field) {
          userObject[field.name] = field.value;
        });
        users.push(userObject);
        localStorage.setItem('users', JSON.stringify(users)); // Lưu vào localStorage
        displayMembers(); // Hiển thị lại danh sách thành viên
        alert('Đăng ký thành công!');
        $('#registerForm')[0].reset();
      } else {
        e.stopPropagation();
        $(this).addClass('was-validated');
      }
    });

    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var username = $('#loginUsername').val();
        var password = $('#loginPassword').val();
        var foundUser = users.find(function(user) {
          return user.username === username && user.password === password;
        });
        if (foundUser) {
          alert('Đăng nhập thành công!');
          // Thực hiện các hành động sau khi đăng nhập thành công
        } else {
          alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
      });

  });