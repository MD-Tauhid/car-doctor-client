export const setAuthToken = (user) =>{
    
    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('https://car-doctor-server-kappa.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('CD-token', data.token)
            // navigate(from, { replace: true })
        })

}