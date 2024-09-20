$(document).ready(function () {
    
    $('#showJoinForm').click(function (e) {
        e.preventDefault();
        $('#joinClubFormContainer').toggle(); 
    });
  
    
    $('#joinClubForm').on('submit', function (e) {
        e.preventDefault();
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var club = $('#club').val();
        var agreeTerms = $('#agreeTerms').is(':checked');
  
        if (name && email && phone && club && agreeTerms) {
            alert('Form submitted successfully!');
            $('#joinClubForm')[0].reset(); 
            $('#joinClubFormContainer').hide(); 
        } else {
            alert('Please fill in all required fields.');
        }
    });
  });