function AuthController() {

    var roles;

    function setRoles(role) {
        roles = role;
    }

    function isAuthorized(neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(neededRole, cb) {
        setTimeout(() => {
            cb(roles.indexOf(neededRole) >= 0);
        }, 0);  // timeout was 2100
    }

    return {isAuthorized, isAuthorizedAsync, setRoles};
}

module.exports = AuthController();