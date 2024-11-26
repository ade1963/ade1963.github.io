const UserData = {
    toolsData: [],
    toolsVaforities: [],

    async getTools() {
        const apiToolsUrl = 'https://tools-api-ade1963.amvera.io/api/tools/';
    
        try {
            // Fetch data from the API
            const response = await fetch(apiToolsUrl, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            });
            console.log(`Response status: ${response.status}`);
    
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Parse the JSON response
            UserData.toolsData = await response.json();
    
            // Process the parsed JSON data
            UserData.toolsData.forEach(tool => {
                console.log(`Tool ID: ${tool.tool_id}`);
                console.log(`Name: ${tool.name}`);
                console.log(`Icon Name: ${tool.icon_name}`);
                console.log(`Description: ${tool.description}`);
                console.log('---');
            });




        } catch (error) {
            console.error('Error fetching tools:', error);
        }
    },

    async getFavorities(userId) {
        if (typeof (userId) != 'number') {
            return;
        }
        const apiVaforitiesUrl = 'https://tools-api-ade1963.amvera.io/api/user/favorites/';
        const params = new URLSearchParams({ user_id: userId });
        const url = `${apiVaforitiesUrl}?${params}`;
    
        try {
            // Fetch data from the API
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            });
            console.log(`Response status: ${response.status}`);
    
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Parse the JSON response
            UserData.toolsVaforities = await response.json();
    
            // Process the parsed JSON data
            UserData.toolsVaforities.forEach(tool => {
                console.log(`Tool ID: ${tool.tool_id}`);
                console.log('---');
            });


        } catch (error) {
            console.error('Error fetching tools:', error);
        }
    }


};
