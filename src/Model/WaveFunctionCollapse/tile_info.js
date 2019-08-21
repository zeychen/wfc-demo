{
    "data": {
        "name": "main",
        "tiles_info": [
            {"name":"0", "symmetry":"X", "tag": ["thing"]},
            {"name":"1", "symmetry":"X"},
            {"name":"2", "symmetry":"X"}
        ],
        "items_info":[
            {"name":"0", "weight":1, "tag":["thing"]}
        ],
        "neighbors":[
            {"left":"0 0","right":"1 0"},
            {"left":"1 0","right":"2 0"},
            {"left":"2 0","right":"0 0"}
        ],
        "rules_info": {
            "tiles" : {
                "0": {
                    "1" : {"distance": [5,6]}
                }
            }
        }
    }
}
