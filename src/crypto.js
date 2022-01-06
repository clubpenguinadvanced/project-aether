export function getLoginHash(password) {

    let loginHash = CryptoJS.MD5(password).toString().toUpperCase();
    loginHash = getLoginHash(
        loginHash,
        'houdini'
    );

    function encryptPassword(password, digest = true) {
        if (digest) {
            password = CryptoJS.MD5(password).toString();
        }

        const swappedHash = password.slice(16, 32) + password.slice(0, 16);
        return swappedHash;
    }

    function getLoginHash(password, rndk) {
        let key = encryptPassword(password, false);
        key += rndk;
        key += 'Y(02.>\'H}t":E1';

        const loginHash = encryptPassword(key);

        return loginHash;
    }

    return loginHash;

}