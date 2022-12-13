import React, { useEffect, useState, useCallback, useRef } from 'react';
import './App.css';
// context imports
import { useStateValue } from './Context/StateProvider';
import { getVideosList } from './services/get';
// components imports
import Header from './components/header/Header';
import SubMenu from './components/SubMenu/SubMenu';
import VideosListing from './components/VideosListing/VideosListing';
import Loader from './components/Loader/Loader';
// styles imports
import './styles/main.scss';

const mockData = {
    "kind": "youtube#searchListResponse",
    "etag": "eOoNidJGh4ormMt4vez7wctfb5Y",
    "nextPageToken": "CAUQAA",
    "regionCode": "EG",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "mX6dfP1uWHj6eE_HFmnSmZBnRrU",
            "id": {
                "kind": "youtube#video",
                "channelId": "v1a-HNkqRmU"
            },
            "snippet": {
                "publishedAt": "2022-12-10T20:49:36Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Eight goals in Hengelo! 🔥  | Highlights FC Twente/Heracles O18 -  Ajax O18",
                "description": "In de slotfase van de najaarscompetitie speelt Ajax O18 een belangrijke wedstrijd in de race om de titel. De ploeg van Frank ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-10T20:49:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "w-Q8oQi5aRBZ2GQpF2eiP_qN0pA",
            "id": {
                "kind": "youtube#video",
                "videoId": "gRUzw2WvJnI"
            },
            "snippet": {
                "publishedAt": "2022-12-07T14:59:32Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "NINE goals! 🎢 | Highlights Ajax - FC Volendam | Friendly",
                "description": "De highlights van het oefenduel tussen Ajax en FC Volendam. Trainer Alfred Schreuder kon weer beschikken over de Mexicaan ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-07T14:59:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "h87zoOnWjoE7rx22aHlvCglXL_4",
            "id": {
                "kind": "youtube#video",
                "videoId": "qpJ0E3RDtl0"
            },
            "snippet": {
                "publishedAt": "2022-09-15T16:00:12Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "‘If I see silver, bro…’ 🪙😩 | FIFA23 RATING REVEAL 🎮 | Bassey &amp; Bergwijn vs Brobbey &amp; Timber",
                "description": "Met FIFA 23 voor de deur zijn de nieuwe ratings voor alle Ajax-spelers bekend. Brian Brobbey, Jurriën Timber, Calvin Bassey en ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-15T16:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "8c-5MZE4mE7Ly7mnSn5hKR_S_Tk",
            "id": {
                "kind": "youtube#video",
                "videoId": "H4gF5WZp13o"
            },
            "snippet": {
                "publishedAt": "2022-08-14T22:00:11Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Hattrick hero Bergwijn! 🤩 | Highlights Ajax - FC Groningen",
                "description": "Ajax heeft zondagmiddag de eerste thuiswedstrijd van het nieuwe Eredivisie-seizoen overtuigend gewonnen. In de Johan Cruijff ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-14T22:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dTk4ZybIw-kCteQuY9-oyy0X5ok",
            "id": {
                "kind": "youtube#video",
                "videoId": "e7E5UYobIss"
            },
            "snippet": {
                "publishedAt": "2022-10-16T22:00:31Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Goals Galoreeeeeee 🔥⚽ | Highlights Ajax - Excelsior | Eredivisie",
                "description": "Ajax heeft het thuispubliek vrijdagavond een zevenklapper voorgeschoteld tegen Excelsior: 7-1. De ploeg van Alfred Schreuder ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-16T22:00:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "mX6dfP1uWHj6eE_HFmnSmZBnRrU",
            "id": {
                "kind": "youtube#video",
                "videoId": "v1a-HNkqRmU"
            },
            "snippet": {
                "publishedAt": "2022-12-10T20:49:36Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Eight goals in Hengelo! 🔥  | Highlights FC Twente/Heracles O18 -  Ajax O18",
                "description": "In de slotfase van de najaarscompetitie speelt Ajax O18 een belangrijke wedstrijd in de race om de titel. De ploeg van Frank ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-10T20:49:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "w-Q8oQi5aRBZ2GQpF2eiP_qN0pA",
            "id": {
                "kind": "youtube#video",
                "videoId": "gRUzw2WvJnI"
            },
            "snippet": {
                "publishedAt": "2022-12-07T14:59:32Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "NINE goals! 🎢 | Highlights Ajax - FC Volendam | Friendly",
                "description": "De highlights van het oefenduel tussen Ajax en FC Volendam. Trainer Alfred Schreuder kon weer beschikken over de Mexicaan ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-07T14:59:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "h87zoOnWjoE7rx22aHlvCglXL_4",
            "id": {
                "kind": "youtube#video",
                "videoId": "qpJ0E3RDtl0"
            },
            "snippet": {
                "publishedAt": "2022-09-15T16:00:12Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "‘If I see silver, bro…’ 🪙😩 | FIFA23 RATING REVEAL 🎮 | Bassey &amp; Bergwijn vs Brobbey &amp; Timber",
                "description": "Met FIFA 23 voor de deur zijn de nieuwe ratings voor alle Ajax-spelers bekend. Brian Brobbey, Jurriën Timber, Calvin Bassey en ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-15T16:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "8c-5MZE4mE7Ly7mnSn5hKR_S_Tk",
            "id": {
                "kind": "youtube#video",
                "videoId": "H4gF5WZp13o"
            },
            "snippet": {
                "publishedAt": "2022-08-14T22:00:11Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Hattrick hero Bergwijn! 🤩 | Highlights Ajax - FC Groningen",
                "description": "Ajax heeft zondagmiddag de eerste thuiswedstrijd van het nieuwe Eredivisie-seizoen overtuigend gewonnen. In de Johan Cruijff ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-14T22:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dTk4ZybIw-kCteQuY9-oyy0X5ok",
            "id": {
                "kind": "youtube#video",
                "videoId": "e7E5UYobIss"
            },
            "snippet": {
                "publishedAt": "2022-10-16T22:00:31Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Goals Galoreeeeeee 🔥⚽ | Highlights Ajax - Excelsior | Eredivisie",
                "description": "Ajax heeft het thuispubliek vrijdagavond een zevenklapper voorgeschoteld tegen Excelsior: 7-1. De ploeg van Alfred Schreuder ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-16T22:00:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "mX6dfP1uWHj6eE_HFmnSmZBnRrU",
            "id": {
                "kind": "youtube#video",
                "videoId": "v1a-HNkqRmU"
            },
            "snippet": {
                "publishedAt": "2022-12-10T20:49:36Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Eight goals in Hengelo! 🔥  | Highlights FC Twente/Heracles O18 -  Ajax O18",
                "description": "In de slotfase van de najaarscompetitie speelt Ajax O18 een belangrijke wedstrijd in de race om de titel. De ploeg van Frank ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/v1a-HNkqRmU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-10T20:49:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "w-Q8oQi5aRBZ2GQpF2eiP_qN0pA",
            "id": {
                "kind": "youtube#video",
                "videoId": "gRUzw2WvJnI"
            },
            "snippet": {
                "publishedAt": "2022-12-07T14:59:32Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "NINE goals! 🎢 | Highlights Ajax - FC Volendam | Friendly",
                "description": "De highlights van het oefenduel tussen Ajax en FC Volendam. Trainer Alfred Schreuder kon weer beschikken over de Mexicaan ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gRUzw2WvJnI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-07T14:59:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "h87zoOnWjoE7rx22aHlvCglXL_4",
            "id": {
                "kind": "youtube#video",
                "videoId": "qpJ0E3RDtl0"
            },
            "snippet": {
                "publishedAt": "2022-09-15T16:00:12Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "‘If I see silver, bro…’ 🪙😩 | FIFA23 RATING REVEAL 🎮 | Bassey &amp; Bergwijn vs Brobbey &amp; Timber",
                "description": "Met FIFA 23 voor de deur zijn de nieuwe ratings voor alle Ajax-spelers bekend. Brian Brobbey, Jurriën Timber, Calvin Bassey en ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qpJ0E3RDtl0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-15T16:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "8c-5MZE4mE7Ly7mnSn5hKR_S_Tk",
            "id": {
                "kind": "youtube#video",
                "videoId": "H4gF5WZp13o"
            },
            "snippet": {
                "publishedAt": "2022-08-14T22:00:11Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Hattrick hero Bergwijn! 🤩 | Highlights Ajax - FC Groningen",
                "description": "Ajax heeft zondagmiddag de eerste thuiswedstrijd van het nieuwe Eredivisie-seizoen overtuigend gewonnen. In de Johan Cruijff ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H4gF5WZp13o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-14T22:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dTk4ZybIw-kCteQuY9-oyy0X5ok",
            "id": {
                "kind": "youtube#video",
                "videoId": "e7E5UYobIss"
            },
            "snippet": {
                "publishedAt": "2022-10-16T22:00:31Z",
                "channelId": "UCGpf7WX7R1one-NwOvg_PbQ",
                "title": "Goals Galoreeeeeee 🔥⚽ | Highlights Ajax - Excelsior | Eredivisie",
                "description": "Ajax heeft het thuispubliek vrijdagavond een zevenklapper voorgeschoteld tegen Excelsior: 7-1. De ploeg van Alfred Schreuder ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/e7E5UYobIss/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AFC Ajax",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-16T22:00:31Z"
            }
        }
    ]
}

function App() {
  
  // states
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [videoType] = useState<string>('video,channel,playlist');
  const [enterPressed, setEnterPressed] = useState<boolean>(false);


  // context: pulling data from data layer
  const [{ videosList, loading }, dispatch]:any = useStateValue();
  

  // methods
    const showLoader = () => {
        if (!loading) {
           return  dispatch({ type: 'SET_LOADING', loading: true })
        } 
        else {
           return  dispatch({ type: 'SET_LOADING', loading: false })
        }
    }

  const searchVideos = () => {
    showLoader()
    getVideosList(videoType, searchKeyword, 20)
    .then((res) => {
      dispatch({ type: 'SET_VIDEOS_LIST', videosList: res.data.items });
      dispatch({ type: 'SET_LOADING', loading: false })
    })

  }


  const updateSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value);
  }
 

  const searchVideosCallback = (e:any) => {
    if (e.key === 'Enter' && searchKeyword) {
      setEnterPressed(true);
    }
  }
  

 
  

  // hooks
  useEffect(() => {
    if(enterPressed) {
    showLoader();
    getVideosList(videoType, searchKeyword, 20)
    .then((res) => {
        dispatch({ type: 'SET_VIDEOS_LIST', videosList: res.data.items });
        setEnterPressed(false);
        return  dispatch({ type: 'SET_LOADING', loading: false }) 
      })
      .catch((err) => {
        console.log(err);
      }) 
    }
 
}, [enterPressed])



    



  
  return (
    <div className="wrapper">
        {/* header */}
        <div className="wrapper__header">
            <Header 
            searchKeyword={searchKeyword} 
            searchVideos={searchVideos} 
            updateSearchKeyword={updateSearchKeyword}
            searchVideosCallback={searchVideosCallback}
            />
        </div>
        <div className="wrapper__content__body">
            <SubMenu 
                totalResult={videosList.length}
            />
            <VideosListing videosList={videosList} /> 
        </div>
        {loading && <Loader />}
        
    </div>
  );
}

export default App;
