
export function clearToken() {
    const tokenId = localStorage.getItem('tokenId');
    localStorage.removeItem(tokenId);
    localStorage.removeItem('tokenId');
}

export function setToken(token) {
    const { tokenId, access_token, refresh_token } = token;
    
    const data = JSON.stringify({ access_token, refresh_token });
    localStorage.setItem("tokenId", tokenId);
    localStorage.setItem(tokenId, data);
}


export const getToken = () => {
    let tokenId = localStorage.getItem("tokenId");
    if(!tokenId)
        return;
        
    const json = localStorage.getItem(tokenId);

    const { access_token, refresh_token } = JSON.parse(json);
    
    return { tokenId, access_token, refresh_token };
};