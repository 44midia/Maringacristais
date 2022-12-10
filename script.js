(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_DA07D254_FC87_8D71_41C2_7E79BC6CC907]); this.init()",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_D857AA71_FD82_7D33_41EF_3AD2A6395E1D",
  "this.Container_D8C45010_FC86_8CF0_419F_0A8C5B7E2562",
  "this.Image_DBA88338_FC86_9330_41EB_7933F67F477F",
  "this.IconButton_DBBA10B9_FC82_8D30_41E6_D6F903638CF6",
  "this.IconButton_DB3B7A5F_FC81_BD70_41EA_52C8A02AA4A4",
  "this.IconButton_D7E5DA49_FC81_9D53_41EE_DE8BD641244F",
  "this.IconButton_DB342F9E_FC83_93F1_41C1_A6A7E05541CB",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_DB342F9E_FC83_93F1_41C1_A6A7E05541CB",
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249739",
 "hfovMin": "150%",
 "id": "panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4",
 "overlays": [
  "this.overlay_EC7CDBDF_FCBE_9370_41ED_B4E070A4FA1B",
  "this.overlay_ED115A63_FC82_9D57_41CD_3C5582157CED",
  "this.overlay_EEC6334F_FC81_B36F_41CA_53B9690FD1C9",
  "this.overlay_DE59EF61_FD86_F350_41E3_F43E2763995B",
  "this.popup_DE683156_FD82_8F71_41C8_55A791CAD789",
  "this.overlay_D95234B3_FD83_9530_41E1_5D45BF90CD15",
  "this.popup_DE33D4A9_FD82_95D0_41E0_FC8889092A95"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 147.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 22.5,
   "panorama": "this.panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "yaw": -60.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 73.84,
   "panorama": "this.panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -47.86,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D64E7751_FC87_9373_41E4_FCF73C302A30",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D64E6751_FC87_9373_41EC_A5E5317A106F",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D64E7751_FC87_9373_41E4_FCF73C302A30",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249599",
 "hfovMin": "150%",
 "id": "panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6",
 "overlays": [
  "this.overlay_E4E18AD4_FD82_9D70_41E6_9A5D11A4CD80",
  "this.overlay_E7BA4EAE_FD82_95D0_41ED_3F79966C8FF1",
  "this.overlay_E762E63D_FD86_B530_41E8_F8BF084C4815"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 72,
   "class": "AdjacentPanorama",
   "backwardYaw": -75.68,
   "panorama": "this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E",
   "distance": 1
  },
  {
   "yaw": 165.07,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.61,
   "panorama": "this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249765",
 "hfovMin": "150%",
 "id": "panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B",
 "overlays": [
  "this.overlay_EBA92EAA_FD86_95D0_41A8_A235B010EF45"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 22.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.27,
   "panorama": "this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -18.61,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D615C7EE_FC87_9350_41E7_E9782661A400",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D61537EE_FC87_9350_41E7_DDCB1C19AB89",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D615C7EE_FC87_9350_41E7_E9782661A400",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -157.5,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D14318B9_FC87_9D30_41E9_96AA53DB27D6",
 "automaticZoomSpeed": 0,
 "manualZoomSpeed": 0,
 "id": "camera_D14378B9_FC87_9D30_41D0_BD6D193F72D2",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D14318B9_FC87_9D30_41E9_96AA53DB27D6",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -141.95,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D69E76D4_FC87_9571_4193_E047ABEDD738",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D69E66D4_FC87_9571_41E3_E38003F3B0F2",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D69E76D4_FC87_9571_4193_E047ABEDD738",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249772",
 "hfovMin": "150%",
 "id": "panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB",
 "overlays": [
  "this.overlay_EE66424E_FC82_8D51_41E5_8BA863274D3C",
  "this.overlay_EF2F2902_FC83_9CD0_41C9_B89842AD065B",
  "this.overlay_EAF108CE_FD86_9D50_41B9_D6AC866FCFFC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "yaw": 31.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -152.18,
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062",
   "distance": 1
  },
  {
   "yaw": 31.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -152.18,
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249697",
 "hfovMin": "150%",
 "id": "panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792",
 "overlays": [
  "this.overlay_E47EA29C_FD8F_8DF1_41E9_0792E3C245D3",
  "this.overlay_E4E3A935_FD8E_9F30_41AF_B56B70D667AC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -74.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -98.18,
   "panorama": "this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA",
   "distance": 1
  },
  {
   "yaw": 132.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 77.11,
   "panorama": "this.panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 107.59,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D5973974_FC87_9F31_41E2_0ECAEC4C6EF0",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D5972974_FC87_9F31_41EC_A90D82A08E24",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D5973974_FC87_9F31_41E2_0ECAEC4C6EF0",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -152.18,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1E5080D_FC87_9CD0_41C9_B90AEFD446F5",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1E5780D_FC87_9CD0_41E9_D473340D941E",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1E5080D_FC87_9CD0_41C9_B90AEFD446F5",
 "manualRotationSpeed": 125
},
{
 "thumbnailUrl": "media/video_DE5743F0_FD82_B331_41AA_E351FB9D6693_t.jpg",
 "scaleMode": "fit_inside",
 "width": 2986,
 "label": "GH017814",
 "loop": false,
 "id": "video_DE5743F0_FD82_B331_41AA_E351FB9D6693",
 "class": "Video",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_DE5743F0_FD82_B331_41AA_E351FB9D6693.mp4",
  "class": "VideoResource",
  "height": 1680
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -102.89,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1921899_FC87_9DF3_41E0_8944556A9BBA",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1927899_FC87_9DF3_41EA_418BED16EB5F",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1921899_FC87_9DF3_41E0_8944556A9BBA",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 27.82,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D63CF7AF_FC87_932F_41D8_25948BADF843",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D63CD7AF_FC87_932F_41EB_99C059F36249",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D63CF7AF_FC87_932F_41D8_25948BADF843",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249733",
 "hfovMin": "150%",
 "id": "panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5",
 "overlays": [
  "this.overlay_EE88A773_FC81_9337_41CD_AEA8614ED66A",
  "this.overlay_EE302474_FC86_B531_41EC_EEF33CA51EC0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97"
  },
  {
   "yaw": 73.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -60.14,
   "panorama": "this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249745",
 "hfovMin": "150%",
 "id": "panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61",
 "overlays": [
  "this.overlay_DC50B8FE_FD81_9D31_41E6_753756E1BEAF",
  "this.overlay_DEECF062_FD8F_8D50_41CB_B6E5946148C2",
  "this.overlay_DF73FB77_FD8F_9330_41CB_8E026CD84DA3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 98.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 38.05,
   "panorama": "this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E",
   "distance": 1
  },
  {
   "yaw": -12.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 171,
   "panorama": "this.panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6",
   "distance": 1
  },
  {
   "yaw": 27.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -134.59,
   "panorama": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": -60.95,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D61B47DE_FC87_9370_41E4_9D9D95DA0C87",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D604B7DE_FC87_9370_41DB_07FC2C03E5B8",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D61B47DE_FC87_9370_41E4_9D9D95DA0C87",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -108,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D162D8A9_FC87_9DD3_41C8_AF59F5C209DC",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D16238A9_FC87_9DD3_41EC_031ADA21685C",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D162D8A9_FC87_9DD3_41C8_AF59F5C209DC",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249546",
 "hfovMin": "150%",
 "id": "panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97",
 "overlays": [
  "this.overlay_EE586930_FC82_7F31_41EA_CA17A645AAF6",
  "this.overlay_EF23D6EC_FC9F_9551_41BE_C82E7681A360"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "items": [
  {
   "media": "this.video_DE5743F0_FD82_B331_41AA_E351FB9D6693",
   "start": "this.viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_D1701C4B_FD81_9557_41D5_BA111837CC29, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_D1701C4B_FD81_9557_41D5_BA111837CC29, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823VideoPlayer)",
   "player": "this.viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823VideoPlayer"
  }
 ],
 "id": "PlayList_D1701C4B_FD81_9557_41D5_BA111837CC29",
 "class": "PlayList"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_DA07D254_FC87_8D71_41C2_7E79BC6CC907",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_DA07D254_FC87_8D71_41C2_7E79BC6CC907.ogg",
  "mp3Url": "media/audio_DA07D254_FC87_8D71_41C2_7E79BC6CC907.mp3"
 },
 "data": {
  "label": "X2Download.app - Controle sua Ansiedade em 5 minutos_ M\u00fasica Relaxante, Respira\u00e7\u00e3o Profunda e Relaxamento (128 kbps)"
 }
},
{
 "initialPosition": {
  "yaw": -24.34,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1B1A87A_FC87_9D31_41D0_08A5F0444E97",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1B1F87A_FC87_9D31_41E3_C13FBC7154DC",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1B1A87A_FC87_9D31_41D0_08A5F0444E97",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249574",
 "hfovMin": "150%",
 "id": "panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D",
 "overlays": [
  "this.overlay_E9E3E7F5_FC82_F330_41C1_0A08D0823F8A",
  "this.overlay_EA8CE822_FC82_9CD1_41E6_EBA979A89B10"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249561",
 "hfovMin": "150%",
 "id": "panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6",
 "overlays": [
  "this.overlay_EF440072_FC82_8D30_41D2_967FA1A5A2F7",
  "this.overlay_E8D422E1_FC82_8D53_41C3_D10372B071C0",
  "this.overlay_E528DEC0_FD86_9550_41E9_AE2D6640A3C6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "yaw": 77.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.14,
   "panorama": "this.panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": -50.92,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -16.03
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -70.57,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1A0B86B_FC87_9D50_41EF_A29143405FAD",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1A0A86B_FC87_9D50_41DE_B1DB3A0B9C6B",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1A0B86B_FC87_9D50_41EF_A29143405FAD",
 "manualRotationSpeed": 125
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": -25.36,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_DE683156_FD82_8F71_41C8_55A791CAD789",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -24.95,
 "hideEasing": "cubic_out",
 "hfov": 11.13,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_DE5743F0_FD82_B331_41AA_E351FB9D6693.mp4",
  "class": "VideoResource",
  "height": 1680
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249645",
 "hfovMin": "150%",
 "id": "panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E",
 "overlays": [
  "this.overlay_D8564F7B_FD9E_7337_41EC_A44E70B9AE69",
  "this.overlay_DF434670_FD81_9530_41E4_22120E55725D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -75.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 72,
   "panorama": "this.panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6",
   "distance": 1
  },
  {
   "yaw": 108.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -102.48,
   "panorama": "this.panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 45.41,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D66CD703_FC87_94D7_41E2_D5A3F81CA24C",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D66CC703_FC87_94D7_41D6_A4A04E90673D",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D66CD703_FC87_94D7_41E2_D5A3F81CA24C",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 170.39,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D6704732_FC87_9331_41EB_FFBDE3B8617E",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D671B732_FC87_9331_41C2_5AD71D9C3321",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D6704732_FC87_9331_41EB_FFBDE3B8617E",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -42.68,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -10.36
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -9,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D69656E4_FC87_9551_41E2_ACB1C281B5E1",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D69646E4_FC87_9551_41E5_707B7EE53804",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D69656E4_FC87_9551_41E2_ACB1C281B5E1",
 "manualRotationSpeed": 125
},
{
 "items": [
  {
   "media": "this.video_ED3DA43E_FC86_9530_41E9_79B8FB52E419",
   "start": "this.viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_D1709C4B_FD81_9557_419B_67CE46954815, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_D1709C4B_FD81_9557_419B_67CE46954815, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4BVideoPlayer)",
   "player": "this.viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4BVideoPlayer"
  }
 ],
 "id": "PlayList_D1709C4B_FD81_9557_419B_67CE46954815",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -14.73,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D5850955_FC87_9F70_41DB_1BC51F2C1132",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D5857955_FC87_9F70_41D8_F33D2D9C9ED5",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D5850955_FC87_9F70_41DB_1BC51F2C1132",
 "manualRotationSpeed": 125
},
{
 "items": [
  {
   "media": "this.panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_camera"
  },
  {
   "media": "this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_camera"
  },
  {
   "media": "this.panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_camera"
  },
  {
   "media": "this.panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_camera"
  },
  {
   "media": "this.panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_camera"
  },
  {
   "media": "this.panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_camera"
  },
  {
   "media": "this.panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_camera"
  },
  {
   "media": "this.panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_camera"
  },
  {
   "media": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_camera"
  },
  {
   "media": "this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_camera"
  },
  {
   "media": "this.panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_camera"
  },
  {
   "media": "this.panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_camera"
  },
  {
   "media": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_camera"
  },
  {
   "media": "this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_camera"
  },
  {
   "media": "this.panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_camera"
  },
  {
   "media": "this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_camera"
  },
  {
   "media": "this.panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_camera"
  },
  {
   "media": "this.panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_camera"
  },
  {
   "media": "this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_camera"
  },
  {
   "media": "this.video_ED3DA43E_FC86_9530_41E9_79B8FB52E419",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -32.73,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D6213790_FC87_93F0_41DC_C4DC6ED91714",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D6211790_FC87_93F0_41E3_B76A437A7FB7",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D6213790_FC87_93F0_41DC_C4DC6ED91714",
 "manualRotationSpeed": 125
},
{
 "thumbnailUrl": "media/video_DE714B3E_FD82_B330_41E2_9FA53E136407_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "GH017815",
 "loop": false,
 "id": "video_DE714B3E_FD82_B330_41E2_9FA53E136407",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_DE714B3E_FD82_B330_41E2_9FA53E136407.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": -32.32,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1C6783C_FC87_9D30_41D9_2573F0358B84",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1C6583C_FC87_9D30_41E7_DCB48439C0B8",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1C6783C_FC87_9D30_41D9_2573F0358B84",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -71.59,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D6568780_FC87_93D1_41ED_0864EF5826E9",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D656D780_FC87_93D1_41BB_5F79A99F3449",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D6568780_FC87_93D1_41ED_0864EF5826E9",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -106.16,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D5805945_FC87_9F53_41B5_06A059D73038",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D5804945_FC87_9F53_41E6_9AC08BB02CA0",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D5805945_FC87_9F53_41B5_06A059D73038",
 "manualRotationSpeed": 125
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_camera",
 "manualRotationSpeed": 125,
 "displayMovements": [
  {
   "duration": 2000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetHfov": 133,
   "targetStereographicFactor": 0,
   "targetPitch": 0
  }
 ]
},
{
 "initialPosition": {
  "yaw": 77.52,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D17C98B9_FC87_9D30_41EE_A7CEB0AB6A9B",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D17C88B9_FC87_9D30_41D9_1555CCB9E3CC",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D17C98B9_FC87_9D30_41EE_A7CEB0AB6A9B",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249594",
 "hfovMin": "150%",
 "id": "panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365",
 "overlays": [
  "this.overlay_E8146B57_FC87_9370_41E5_9719EC0A37B4",
  "this.overlay_E91EF4B2_FC86_9531_41CB_2691B1CDE674"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": -14.93,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D5983955_FC87_9F70_41EC_7B840E0AA1E1",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D5982955_FC87_9F70_41C8_596B1581182E",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D5983955_FC87_9F70_41EC_7B840E0AA1E1",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 167.73,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D56BA984_FC87_9FD0_41D5_94AD6020C226",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D56B9984_FC87_9FD0_41DE_61A225D2610A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D56BA984_FC87_9FD0_41D5_94AD6020C226",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -67.79,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -8.85
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -72.41,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1F6681C_FC87_9CF1_41C5_346F58FC778B",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1F6481C_FC87_9CF1_41CA_7DC70548A626",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1F6681C_FC87_9CF1_41C5_346F58FC778B",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 27.82,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D60987BF_FC87_9330_41D9_1223D2EECA6A",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D609F7BF_FC87_9330_415C_1D5119523C73",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D60987BF_FC87_9330_41D9_1223D2EECA6A",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249703",
 "hfovMin": "150%",
 "id": "panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA",
 "overlays": [
  "this.overlay_E5C9EA54_FD81_9D71_41E1_CCA93F8A69EA",
  "this.overlay_E45AA32D_FD8E_8CD3_41E3_FBBFFEC2FA69",
  "this.overlay_E695B996_FD83_9FF1_41CA_640E2F503170"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -9.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 165.07,
   "panorama": "this.panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6",
   "distance": 1
  },
  {
   "yaw": -98.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -74.05,
   "panorama": "this.panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792",
   "distance": 1
  },
  {
   "yaw": 165.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -72.41,
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 105.95,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D59C6965_FC87_9F50_41E6_39D4B8A4CA9C",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D59C5965_FC87_9F50_41DE_D3DF84D2EFE7",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D59C6965_FC87_9F50_41E6_39D4B8A4CA9C",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249637",
 "hfovMin": "150%",
 "id": "panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3",
 "overlays": [
  "this.overlay_E3B49CC3_FD86_9550_41D6_0C628A8F6799",
  "this.overlay_E20486CC_FD82_9550_41E5_E0C5BCA2E707"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 147.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 119.05,
   "panorama": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950",
   "distance": 1
  },
  {
   "yaw": 109.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.39,
   "panorama": "this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249657",
 "hfovMin": "150%",
 "id": "panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1",
 "overlays": [
  "this.overlay_DF4B3290_FD82_8DF0_41E7_95D5CE17203A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -102.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 108.41,
   "panorama": "this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 81.82,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D181E88A_FC87_9DD0_41E8_9043DDDFE1A0",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D181D88A_FC87_9DD0_41C8_0F79B648F0DE",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D181E88A_FC87_9DD0_41E8_9043DDDFE1A0",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": 119.86,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D6596761_FC87_9350_41E5_84807F8D13A5",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D6594761_FC87_9350_41D1_D99EF88C4693",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D6596761_FC87_9350_41E5_84807F8D13A5",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -13.15,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -5.83
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EA6538F6_FC83_FD30_41EE_747964A922E1",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_camera",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EA6538F6_FC83_FD30_41EE_747964A922E1",
 "manualRotationSpeed": 125
},
{
 "thumbnailUrl": "media/video_ED3DA43E_FC86_9530_41E9_79B8FB52E419_t.jpg",
 "scaleMode": "fit_inside",
 "width": 2986,
 "label": "GH017819",
 "loop": false,
 "id": "video_ED3DA43E_FC86_9530_41E9_79B8FB52E419",
 "class": "Video",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_ED3DA43E_FC86_9530_41E9_79B8FB52E419.mp4",
  "class": "VideoResource",
  "height": 1680
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249568",
 "hfovMin": "150%",
 "id": "panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950",
 "overlays": [
  "this.overlay_E69F869F_FDBE_95EF_4195_C28F103EC743",
  "this.overlay_E6E37755_FDBE_7373_41D7_BEC7F5FAB352",
  "this.overlay_E198F29C_FD82_8DF1_41BB_599C6E2B8A94",
  "this.overlay_E1FA53FF_FD81_B32F_41ED_BA67CC795CB9",
  "this.overlay_E1CB8C0D_FD8E_F4D3_41E0_462417E23076"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -134.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 27.82,
   "panorama": "this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61",
   "distance": 1
  },
  {
   "yaw": 155.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 107.59,
   "panorama": "this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E",
   "distance": 1
  },
  {
   "yaw": 119.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.68,
   "panorama": "this.panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "id": "window_DEC673A1_FD82_73D0_41EB_95618B48FE01",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "layout": "vertical",
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "shadowHorizontalLength": 3,
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window65926"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249765",
 "id": "panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E",
 "overlays": [
  "this.overlay_DEBC6004_FD81_8CD0_41EC_C72230669614"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "id": "window_DEB486FA_FD82_9530_41E6_5F9324FDDAEF",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "closeButtonRollOverIconLineWidth": 5,
 "minHeight": 20,
 "modal": true,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "borderSize": 0,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 5,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 0,
 "children": [
  "this.viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4B"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "layout": "vertical",
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderColor": "#000000",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#888888",
 "shadowHorizontalLength": 3,
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "gap": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "titlePaddingLeft": 5,
 "paddingTop": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "data": {
  "name": "Window66978"
 },
 "shadowSpread": 1,
 "titleFontFamily": "Arial"
},
{
 "items": [
  {
   "media": "this.panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_camera"
  }
 ],
 "id": "playList_D6ABA677_FC87_9530_41D4_540BDF893DD8",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249652",
 "hfovMin": "150%",
 "id": "panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6",
 "overlays": [
  "this.overlay_DD76F4E7_FD82_755F_41D7_03491C717811",
  "this.overlay_DDDCE5D7_FD83_B770_41D9_2098F18128D8",
  "this.overlay_DDA82489_FD82_95D0_41C1_317AE57CB654"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 171,
   "class": "AdjacentPanorama",
   "backwardYaw": -12.27,
   "panorama": "this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "items": [
  {
   "media": "this.video_DE714B3E_FD82_B330_41E2_9FA53E136407",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D6A49696_FC87_95F0_41D6_97C0B9EB888E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D6A49696_FC87_95F0_41D6_97C0B9EB888E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_D6A49696_FC87_95F0_41D6_97C0B9EB888E",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_DE5743F0_FD82_B331_41AA_E351FB9D6693",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D6A4C696_FC87_95F0_41E9_F4E8353B91E3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D6A4C696_FC87_95F0_41E9_F4E8353B91E3, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_D6A4C696_FC87_95F0_41E9_F4E8353B91E3",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 104.32,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D67B2713_FC87_94E0_41AC_DCEF6E18D143",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D67B0713_FC87_94F0_41EF_1956EEC05DBD",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D67B2713_FC87_94E0_41AC_DCEF6E18D143",
 "manualRotationSpeed": 125
},
{
 "initialPosition": {
  "yaw": -5.78,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -6.13
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 0,
 "manualZoomSpeed": 0,
 "id": "panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_camera",
 "class": "PanoramaCamera",
 "idleSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": 292.2,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": 33.9,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249554",
 "hfovMin": "150%",
 "id": "panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062",
 "overlays": [
  "this.overlay_EBB1BCB2_FD81_B531_41AC_543171C238AD",
  "this.overlay_EA8E1394_FD9E_93F0_41E9_7D7FFC1B8EEF",
  "this.overlay_E54442F4_FD83_8D31_41E2_04FF2AB42BD1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB"
  },
  {
   "yaw": -72.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 165.27,
   "panorama": "this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 38.25,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_DE33D4A9_FD82_95D0_41E0_FC8889092A95",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -33.34,
 "hideEasing": "cubic_out",
 "hfov": 18.11,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_ED3DA43E_FC86_9530_41E9_79B8FB52E419.mp4",
  "class": "VideoResource",
  "height": 1680
 }
},
{
 "initialPosition": {
  "yaw": -81.41,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_D1D0E84B_FC87_9D57_41B6_14868A9C8D34",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 0,
 "id": "camera_D1D0C84B_FC87_9D57_41E2_22709A53B4AB",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_D1D0E84B_FC87_9D57_41B6_14868A9C8D34",
 "manualRotationSpeed": 125
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1670081249613",
 "hfovMin": "150%",
 "id": "panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E",
 "overlays": [
  "this.overlay_E04B1253_FD82_8D70_41E5_17F8F196A818",
  "this.overlay_E05526BF_FD82_9530_41E8_3923F1B265B6",
  "this.overlay_E3AE2878_FD87_9D30_41E1_8ADCDDF3843C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 38.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 98.59,
   "panorama": "this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61",
   "distance": 1
  },
  {
   "yaw": 161.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.43,
   "panorama": "this.panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3",
   "distance": 1
  },
  {
   "yaw": 107.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 155.66,
   "panorama": "this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_t.jpg",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_D857AA71_FD82_7D33_41EF_3AD2A6395E1D",
 "left": "25.5%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "27.808%",
 "children": [
  "this.IconButton_DBB80C85_FC83_95D3_41C6_FEE27E6D5863"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "bottom": "12.77%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "25.457%",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Container73983"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_D8C45010_FC86_8CF0_419F_0A8C5B7E2562",
 "left": "0.24%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "13.406%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "5.87%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "24.959%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Container84601"
 }
},
{
 "maxHeight": 1080,
 "id": "Image_DBA88338_FC86_9330_41EB_7933F67F477F",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "13.406%",
 "borderRadius": 0,
 "url": "skin/Image_DBA88338_FC86_9330_41EB_7933F67F477F.png",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "5.87%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "24.959%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Logo"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 1080
},
{
 "maxHeight": 1080,
 "id": "IconButton_DBBA10B9_FC82_8D30_41E6_D6F903638CF6",
 "backgroundOpacity": 0,
 "width": 46,
 "paddingRight": 0,
 "right": "46.6%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": "0.06%",
 "minWidth": 1,
 "mode": "push",
 "height": 51,
 "paddingTop": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FAGJ35YVL4CJXC1&e=ATOtCIk_Ke0xpB6N4NgUmwCNbbUgD3jD2GXV7Gg-_imWzDMdX71wI8B_VLQJUOPnNe5UU74UNV9GCDP6oXHz9-oo3Aut39y812tLrRQ', '_blank')",
 "shadow": false,
 "iconURL": "skin/IconButton_DBBA10B9_FC82_8D30_41E6_D6F903638CF6.png",
 "horizontalAlign": "center",
 "data": {
  "name": "google maps"
 },
 "cursor": "hand",
 "maxWidth": 1080
},
{
 "maxHeight": 1080,
 "id": "IconButton_DB3B7A5F_FC81_BD70_41EA_52C8A02AA4A4",
 "left": "46.43%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 37,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": "1.85%",
 "minWidth": 1,
 "mode": "push",
 "height": 33,
 "paddingTop": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FAGJ35YVL4CJXC1&e=ATOtCIk_Ke0xpB6N4NgUmwCNbbUgD3jD2GXV7Gg-_imWzDMdX71wI8B_VLQJUOPnNe5UU74UNV9GCDP6oXHz9-oo3Aut39y812tLrRQ', '_blank')",
 "shadow": false,
 "iconURL": "skin/IconButton_DB3B7A5F_FC81_BD70_41EA_52C8A02AA4A4.png",
 "horizontalAlign": "center",
 "data": {
  "name": "whats"
 },
 "cursor": "hand",
 "maxWidth": 1080
},
{
 "maxHeight": 1080,
 "id": "IconButton_D7E5DA49_FC81_9D53_41EE_DE8BD641244F",
 "left": "43.17%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": 31.1,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": "1.53%",
 "minWidth": 1,
 "mode": "push",
 "height": 37,
 "paddingTop": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.instagram.com/maringacristais/', '_blank')",
 "shadow": false,
 "iconURL": "skin/IconButton_D7E5DA49_FC81_9D53_41EE_DE8BD641244F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "insta"
 },
 "cursor": "hand",
 "maxWidth": 1080
},
{
 "id": "IconButton_DB342F9E_FC83_93F1_41C1_A6A7E05541CB",
 "backgroundOpacity": 0,
 "width": 35,
 "paddingRight": 0,
 "right": "43.88%",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_DB342F9E_FC83_93F1_41C1_A6A7E05541CB_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": "2.67%",
 "minWidth": 0,
 "mode": "toggle",
 "height": 26,
 "pressedIconURL": "skin/IconButton_DB342F9E_FC83_93F1_41C1_A6A7E05541CB_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_DB342F9E_FC83_93F1_41C1_A6A7E05541CB.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button27672"
 },
 "cursor": "hand"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "UIComponent",
 "top": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "UIComponent89960"
 },
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage89961"
 },
 "visible": false
},
{
 "fontFamily": "Arial",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "class": "CloseButton",
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "gap": 5,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "CloseButton89962"
 },
 "textDecoration": "none",
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.92,
   "yaw": 147.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B, this.camera_D14378B9_FC87_9D30_41D0_BD6D193F72D2); this.setMediaBehaviour(this.playList_D6ABA677_FC87_9530_41D4_540BDF893DD8, 0, this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E65C78F5_FC83_FD33_41ED_5B8C64AEF0B6",
   "pitch": -22.5,
   "hfov": 21.92,
   "yaw": 147.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EC7CDBDF_FCBE_9370_41ED_B4E070A4FA1B",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19,
   "yaw": 1.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_DA10E454_FC82_B570_41BC_A02F172CA44D",
   "pitch": -30.68,
   "hfov": 19,
   "yaw": 1.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_ED115A63_FC82_9D57_41CD_3C5582157CED",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17,
   "yaw": -60.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5, this.camera_D5804945_FC87_9F53_41E6_9AC08BB02CA0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E656F8F5_FC83_FD33_41C6_E0E0FC4E3A7C",
   "pitch": -39.68,
   "hfov": 17,
   "yaw": -60.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EEC6334F_FC81_B36F_41CA_53B9690FD1C9",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.13,
   "yaw": -25.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_DE683156_FD82_8F71_41C8_55A791CAD789, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_DEC673A1_FD82_73D0_41EB_95618B48FE01, this.video_DE5743F0_FD82_B331_41AA_E351FB9D6693, this.PlayList_D1701C4B_FD81_9557_41D5_BA111837CC29, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_5_0.png",
      "width": 348,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -24.95,
   "yaw": -25.36,
   "distance": 50
  }
 ],
 "id": "overlay_DE59EF61_FD86_F350_41E3_F43E2763995B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.11,
   "yaw": 38.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_6_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_DE33D4A9_FD82_95D0_41E0_FC8889092A95, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingLeft':5,'paddingRight':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_DEB486FA_FD82_9530_41E6_5F9324FDDAEF, this.video_ED3DA43E_FC86_9530_41E9_79B8FB52E419, this.PlayList_D1709C4B_FD81_9557_419B_67CE46954815, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_6_0.png",
      "width": 615,
      "class": "ImageResourceLevel",
      "height": 383
     }
    ]
   },
   "pitch": -33.34,
   "yaw": 38.25,
   "distance": 50
  }
 ],
 "id": "overlay_D95234B3_FD83_9530_41E1_5D45BF90CD15",
 "data": {
  "label": "Image"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D64E7751_FC87_9373_41E4_FCF73C302A30",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.3,
   "yaw": 72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E, this.camera_D67B0713_FC87_94F0_41EF_1956EEC05DBD); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93091A8_FD82_8FD1_41D2_85A78C4F8335",
   "pitch": -38.45,
   "hfov": 17.3,
   "yaw": 72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4E18AD4_FD82_9D70_41E6_9A5D11A4CD80",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.38,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA, this.camera_D671B732_FC87_9331_41C2_5AD71D9C3321); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93021A8_FD82_8FD1_41AF_EF2FC56B4062",
   "pitch": -24.75,
   "hfov": 26.38,
   "yaw": 165.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E7BA4EAE_FD82_95D0_41ED_3F79966C8FF1",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.5,
   "yaw": -12.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D933C1A8_FD82_8FD1_41B6_9612224B1B90",
   "pitch": -33.14,
   "hfov": 18.5,
   "yaw": -12.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E762E63D_FD86_B530_41E8_F8BF084C4815",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.88,
   "yaw": 22.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4, this.camera_D6211790_FC87_93F0_41E3_B76A437A7FB7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EA69D3C4_FD86_9350_41CB_56567C376113",
   "pitch": -7.57,
   "hfov": 34.88,
   "yaw": 22.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBA92EAA_FD86_95D0_41A8_A235B010EF45",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D615C7EE_FC87_9350_41E7_E9782661A400",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D14318B9_FC87_9D30_41E9_96AA53DB27D6",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D69E76D4_FC87_9571_4193_E047ABEDD738",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.05,
   "yaw": 118.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E649E8F5_FC83_FD33_41DE_CF72E01739B8",
   "pitch": -25.77,
   "hfov": 25.05,
   "yaw": 118.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE66424E_FC82_8D51_41E5_8BA863274D3C",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.15,
   "yaw": -63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E64828F5_FC83_FD33_41C6_7754D8E03D2D",
   "pitch": -34.77,
   "hfov": 18.15,
   "yaw": -63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EF2F2902_FC83_9CD0_41C9_B89842AD065B",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.17,
   "yaw": 31.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062, this.camera_D609F7BF_FC87_9330_415C_1D5119523C73); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93A01A4_FD82_8FD1_41EA_CBA6428D0851",
   "pitch": -46.64,
   "hfov": 15.17,
   "yaw": 31.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAF108CE_FD86_9D50_41B9_D6AC866FCFFC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.47,
   "yaw": -74.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -55.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA, this.camera_D181D88A_FC87_9DD0_41C8_0F79B648F0DE); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93121A7_FD82_8FDF_41E9_8C340D2C9B8F",
   "pitch": -55.64,
   "hfov": 12.47,
   "yaw": -74.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E47EA29C_FD8F_8DF1_41E9_0792E3C245D3",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.98,
   "yaw": 132.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6, this.camera_D1927899_FC87_9DF3_41EA_418BED16EB5F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D930E1A8_FD82_8FD1_41E7_C475B3CA3D92",
   "pitch": -54,
   "hfov": 12.98,
   "yaw": 132.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4E3A935_FD8E_9F30_41AF_B56B70D667AC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D5973974_FC87_9F31_41E2_0ECAEC4C6EF0",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1E5080D_FC87_9CD0_41C9_B90AEFD446F5",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1921899_FC87_9DF3_41E0_8944556A9BBA",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D63CF7AF_FC87_932F_41D8_25948BADF843",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.82,
   "yaw": -76.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E64908F5_FC83_FD33_41D4_A2AFE5771A9D",
   "pitch": -47.86,
   "hfov": 14.82,
   "yaw": -76.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE88A773_FC81_9337_41CD_AEA8614ED66A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.3,
   "yaw": 73.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4, this.camera_D6594761_FC87_9350_41D1_D99EF88C4693); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E649B8F5_FC83_FD33_41D8_9E62EAEFE2C3",
   "pitch": -18.61,
   "hfov": 28.3,
   "yaw": 73.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE302474_FC86_B531_41EC_EEF33CA51EC0",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.16,
   "yaw": -12.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6, this.camera_D69646E4_FC87_9551_41E5_707B7EE53804); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E4F1BE_FD82_8F30_41E7_9F878A15FA2D",
   "pitch": -29.86,
   "hfov": 19.16,
   "yaw": -12.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DC50B8FE_FD81_9D31_41E6_753756E1BEAF",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.39,
   "yaw": 27.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950, this.camera_D66CC703_FC87_94D7_41D6_A4A04E90673D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E4B1BE_FD82_8F30_41C4_BC8C5424F3CD",
   "pitch": -28.64,
   "hfov": 19.39,
   "yaw": 27.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DEECF062_FD8F_8D50_41CB_B6E5946148C2",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.24,
   "yaw": 98.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E, this.camera_D69E66D4_FC87_9571_41E3_E38003F3B0F2); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E421BE_FD82_8F30_41E1_137F6A1112CF",
   "pitch": -29.45,
   "hfov": 19.24,
   "yaw": 98.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DF73FB77_FD8F_9330_41CB_8E026CD84DA3",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D61B47DE_FC87_9370_41E4_9D9D95DA0C87",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D162D8A9_FC87_9DD3_41C8_AF59F5C209DC",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.26,
   "yaw": -72.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E648A8F5_FC83_FD33_41DF_9C55B04DF983",
   "pitch": -28.43,
   "hfov": 26.26,
   "yaw": -72.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EE586930_FC82_7F31_41EA_CA17A645AAF6",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.71,
   "yaw": 110.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E648D8F5_FC83_FD33_41DB_B998D5AAE481",
   "pitch": -22.09,
   "hfov": 19.71,
   "yaw": 110.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EF23D6EC_FC9F_9551_41BE_C82E7681A360",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "viewerArea": "this.viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823",
 "id": "viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1B1A87A_FC87_9D31_41D0_08A5F0444E97",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.21,
   "yaw": -158.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D16C1C35_FD81_9533_41B3_13A235CE2FFF",
   "pitch": -47.86,
   "hfov": 19.21,
   "yaw": -158.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9E3E7F5_FC82_F330_41C1_0A08D0823F8A",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.76,
   "yaw": 159.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E64AC8F5_FC83_FD33_41ED_9A6B6798B34B",
   "pitch": -33.34,
   "hfov": 30.76,
   "yaw": 159.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA8CE822_FC82_9CD1_41E6_EBA979A89B10",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.08,
   "yaw": 163.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E64B08F5_FC83_FD33_41CA_FDDB99A5C47C",
   "pitch": -9.41,
   "hfov": 31.08,
   "yaw": 163.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EF440072_FC82_8D30_41D2_967FA1A5A2F7",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.74,
   "yaw": -2.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E64BA8F5_FC83_FD33_41C4_B95EA819BD52",
   "pitch": -30.48,
   "hfov": 25.74,
   "yaw": -2.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8D422E1_FC82_8D53_41C3_D10372B071C0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.77,
   "yaw": 77.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792, this.camera_D64E6751_FC87_9373_41EC_A5E5317A106F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D934A1A5_FD82_8FD3_41DD_652ADC251E40",
   "pitch": -36.41,
   "hfov": 18.77,
   "yaw": 77.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E528DEC0_FD86_9550_41E9_AE2D6640A3C6",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1A0B86B_FC87_9D50_41EF_A29143405FAD",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.49,
   "yaw": -75.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6, this.camera_D16238A9_FC87_9DD3_41EC_031ADA21685C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E331BD_FD82_8F30_41E1_42FA9E714C4F",
   "pitch": -52.36,
   "hfov": 13.49,
   "yaw": -75.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8564F7B_FD9E_7337_41EC_A44E70B9AE69",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.7,
   "yaw": 108.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1, this.camera_D17C88B9_FC87_9D30_41D9_1555CCB9E3CC); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E2D1BD_FD82_8F30_41E6_8F73C3CFA620",
   "pitch": -40.91,
   "hfov": 16.7,
   "yaw": 108.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DF434670_FD81_9530_41E4_22120E55725D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D66CD703_FC87_94D7_41E2_D5A3F81CA24C",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D6704732_FC87_9331_41EB_FFBDE3B8617E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D69656E4_FC87_9551_41E2_ACB1C281B5E1",
 "class": "PanoramaCameraSequence"
},
{
 "viewerArea": "this.viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4B",
 "id": "viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4BVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D5850955_FC87_9F70_41DB_1BC51F2C1132",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D6213790_FC87_93F0_41DC_C4DC6ED91714",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1C6783C_FC87_9D30_41D9_2573F0358B84",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D6568780_FC87_93D1_41ED_0864EF5826E9",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D5805945_FC87_9F53_41B5_06A059D73038",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D17C98B9_FC87_9D30_41EE_A7CEB0AB6A9B",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.89,
   "yaw": 170.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93471A6_FD82_8FD1_41C1_4908E8F34587",
   "pitch": -28.02,
   "hfov": 28.89,
   "yaw": 170.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8146B57_FC87_9370_41E5_9719EC0A37B4",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.81,
   "yaw": 14.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E64A08F5_FC83_FD33_41BF_097C73FCEFFF",
   "pitch": -32.73,
   "hfov": 25.81,
   "yaw": 14.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E91EF4B2_FC86_9531_41CB_2691B1CDE674",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D5983955_FC87_9F70_41EC_7B840E0AA1E1",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D56BA984_FC87_9FD0_41D5_94AD6020C226",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1F6681C_FC87_9CF1_41C5_346F58FC778B",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D60987BF_FC87_9330_41D9_1223D2EECA6A",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.89,
   "yaw": -9.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6, this.camera_D5982955_FC87_9F70_41C8_596B1581182E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93651A7_FD82_8FDF_41D6_52CFE4209023",
   "pitch": -45.61,
   "hfov": 20.89,
   "yaw": -9.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E5C9EA54_FD81_9D71_41E1_CCA93F8A69EA",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.86,
   "yaw": -98.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792, this.camera_D59C5965_FC87_9F50_41DE_D3DF84D2EFE7); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D931C1A7_FD82_8FDF_41DB_A91089C1F89C",
   "pitch": -54.41,
   "hfov": 12.86,
   "yaw": -98.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E45AA32D_FD8E_8CD3_41E3_FBBFFEC2FA69",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.17,
   "yaw": 165.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062, this.camera_D5972974_FC87_9F31_41EC_A90D82A08E24); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D931B1A7_FD82_8FDF_41C4_360FA10A9CFE",
   "pitch": -22.7,
   "hfov": 27.17,
   "yaw": 165.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E695B996_FD83_9FF1_41CA_640E2F503170",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D59C6965_FC87_9F50_41E6_39D4B8A4CA9C",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.47,
   "yaw": 147.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950, this.camera_D604B7DE_FC87_9370_41DB_07FC2C03E5B8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D90C91AA_FD82_8FD1_41DA_3CD102741504",
   "pitch": -22.09,
   "hfov": 20.47,
   "yaw": 147.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3B49CC3_FD86_9550_41D6_0C628A8F6799",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.84,
   "yaw": 109.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E, this.camera_D61537EE_FC87_9350_41E7_DDCB1C19AB89); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D90C21AA_FD82_8FD1_41C6_4DC2F617BED9",
   "pitch": -33.14,
   "hfov": 18.84,
   "yaw": 109.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E20486CC_FD82_9550_41E5_E0C5BCA2E707",
 "data": {
  "label": "Circle Arrow 04 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.72,
   "yaw": -102.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E, this.camera_D656D780_FC87_93D1_41BB_5F79A99F3449); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E541BE_FD82_8F30_41EB_E6F43830279F",
   "pitch": -54.61,
   "hfov": 18.72,
   "yaw": -102.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DF4B3290_FD82_8DF0_41E7_95D5CE17203A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D181E88A_FC87_9DD0_41E8_9043DDDFE1A0",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D6596761_FC87_9350_41E5_84807F8D13A5",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_EA6538F6_FC83_FD30_41EE_747964A922E1",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 14.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93361A8_FD82_8FD1_41B6_1A2E5C1E2950",
   "pitch": -27.41,
   "hfov": 19.61,
   "yaw": 14.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E69F869F_FDBE_95EF_4195_C28F103EC743",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.96,
   "yaw": -59.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93321A9_FD82_8FD3_41D5_8EB9C40B1FD2",
   "pitch": -35.59,
   "hfov": 17.96,
   "yaw": -59.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E6E37755_FDBE_7373_41D7_BEC7F5FAB352",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.09,
   "yaw": 119.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3, this.camera_D1C6583C_FC87_9D30_41E7_DCB48439C0B8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D932C1A9_FD82_8FD3_41E4_44B3E03160B1",
   "pitch": -24.55,
   "hfov": 20.09,
   "yaw": 119.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E198F29C_FD82_8DF1_41BB_599C6E2B8A94",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.79,
   "yaw": 155.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E, this.camera_D1F6481C_FC87_9CF1_41CA_7DC70548A626); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D93291A9_FD82_8FD3_41A4_4C2430F2E7D8",
   "pitch": -25.77,
   "hfov": 18.79,
   "yaw": 155.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1FA53FF_FD81_B32F_41ED_BA67CC795CB9",
 "data": {
  "label": "Circle Arrow 04 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.3,
   "yaw": -134.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61, this.camera_D1E5780D_FC87_9CD0_41E9_D473340D941E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93231A9_FD82_8FD3_41E9_8AD760DD5C45",
   "pitch": -38.45,
   "hfov": 17.3,
   "yaw": -134.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E1CB8C0D_FD8E_F4D3_41E0_462417E23076",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uidD6AA9677_FC87_9530_41D8_508E877E0823",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea89958"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.81,
   "yaw": 23.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D6959C29_FD81_94D3_41EE_6D2CBC3B2762",
   "pitch": -5.32,
   "hfov": 33.81,
   "yaw": 23.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DEBC6004_FD81_8CD0_41EC_C72230669614",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uidD6A9B686_FC87_95D1_41D2_579CB16ADA4B",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea89959"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.28,
   "yaw": 105.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E271BD_FD82_8F30_41E1_C9F265D5B8EB",
   "pitch": -42.55,
   "hfov": 16.28,
   "yaw": 105.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DD76F4E7_FD82_755F_41D7_03491C717811",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.38,
   "yaw": -71.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E211BD_FD82_8F30_41E7_65AFE7C6B27E",
   "pitch": -42.14,
   "hfov": 16.38,
   "yaw": -71.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DDDCE5D7_FD83_B770_41D9_2098F18128D8",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.59,
   "yaw": 171,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61, this.camera_D56B9984_FC87_9FD0_41DE_61A225D2610A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D9E5A1BD_FD82_8F30_41CD_BDD1BD490515",
   "pitch": -41.32,
   "hfov": 16.59,
   "yaw": 171,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DDA82489_FD82_95D0_41C1_317AE57CB654",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D67B2713_FC87_94E0_41AC_DCEF6E18D143",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.89,
   "yaw": -72.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA, this.camera_D5857955_FC87_9F70_41D8_F33D2D9C9ED5); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93731A6_FD82_8FD1_41EF_80A71905CCDB",
   "pitch": -25.77,
   "hfov": 19.89,
   "yaw": -72.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBB1BCB2_FD81_B531_41AC_543171C238AD",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.96,
   "yaw": 123.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D936F1A6_FD82_8FD1_41ED_2716C6F5A85F",
   "pitch": -25.16,
   "hfov": 22.96,
   "yaw": 123.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA8E1394_FD9E_93F0_41E9_7D7FFC1B8EEF",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.9,
   "yaw": -152.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D93681A7_FD82_8FDF_41E1_15FEC09A7482",
   "pitch": -40.09,
   "hfov": 16.9,
   "yaw": -152.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E54442F4_FD83_8D31_41E2_04FF2AB42BD1",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "linear",
   "yawDelta": 292.2,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  },
  {
   "easing": "cubic_out",
   "yawDelta": 33.9,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 5.31
  }
 ],
 "id": "sequence_D1D0E84B_FC87_9D57_41B6_14868A9C8D34",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.08,
   "yaw": 107.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950, this.camera_D1B1F87A_FC87_9D31_41E3_C13FBC7154DC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D90DA1A9_FD82_8FD3_41E6_3C8F810E9329",
   "pitch": -30.27,
   "hfov": 19.08,
   "yaw": 107.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E04B1253_FD82_8D70_41E5_17F8F196A818",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.16,
   "yaw": 38.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61, this.camera_D1D0C84B_FC87_9D57_41E2_22709A53B4AB); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D90D51AA_FD82_8FD1_41EB_7DAD4544D9FD",
   "pitch": -29.86,
   "hfov": 19.16,
   "yaw": 38.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E05526BF_FD82_9530_41E8_3923F1B265B6",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.1,
   "yaw": 161.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3, this.camera_D1A0A86B_FC87_9D50_41DE_B1DB3A0B9C6B); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D90CE1AA_FD82_8FD1_41E5_079A865D5B19",
   "pitch": -25.77,
   "hfov": 15.1,
   "yaw": 161.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3AE2878_FD87_9D30_41E1_8ADCDDF3843C",
 "data": {
  "label": "Circle Arrow 04 Right"
 }
},
{
 "maxHeight": 1080,
 "id": "IconButton_DBB80C85_FC83_95D3_41C6_FEE27E6D5863",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 62,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 60,
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_DBB80C85_FC83_95D3_41C6_FEE27E6D5863.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Loja"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 1080
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E65C78F5_FC83_FD33_41ED_5B8C64AEF0B6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_DA10E454_FC82_B570_41BC_A02F172CA44D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9E9E1_E2E3_F100_41EA_9D5DB182B8B4_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E656F8F5_FC83_FD33_41C6_E0E0FC4E3A7C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93091A8_FD82_8FD1_41D2_85A78C4F8335",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D93021A8_FD82_8FD1_41AF_EF2FC56B4062",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B10100_E2E5_9100_41E7_330AF9033BB6_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D933C1A8_FD82_8FD1_41B6_9612224B1B90",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B2F9D0_E2E3_9100_41E1_430449AF895B_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EA69D3C4_FD86_9350_41CB_56567C376113",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E649E8F5_FC83_FD33_41DE_CF72E01739B8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E64828F5_FC83_FD33_41C6_7754D8E03D2D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B2F1E4_E2E2_9107_41E2_9C2764637BBB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93A01A4_FD82_8FD1_41EA_CBA6428D0851",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93121A7_FD82_8FDF_41E9_8C340D2C9B8F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8ABBE37_E2E2_7301_41E3_212A4225A792_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D930E1A8_FD82_8FD1_41E7_C475B3CA3D92",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E64908F5_FC83_FD33_41D4_A2AFE5771A9D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9D3CF_E2E3_9100_41E0_D707569345D5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E649B8F5_FC83_FD33_41D8_9E62EAEFE2C3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E4F1BE_FD82_8F30_41E7_9F878A15FA2D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E4B1BE_FD82_8F30_41C4_BC8C5424F3CD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9929B_E2E3_B301_41E2_878D1CC02A61_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E421BE_FD82_8F30_41E1_137F6A1112CF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E648A8F5_FC83_FD33_41DF_9C55B04DF983",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8D818DD_E2E3_9F00_41DE_9C5F386CAD97_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E648D8F5_FC83_FD33_41DB_B998D5AAE481",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D16C1C35_FD81_9533_41B3_13A235CE2FFF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AFE609_E2E6_B300_41E2_215550A5A99D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E64AC8F5_FC83_FD33_41ED_9A6B6798B34B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E64B08F5_FC83_FD33_41CA_FDDB99A5C47C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E64BA8F5_FC83_FD33_41C4_B95EA819BD52",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8ADE6E5_E2E7_9301_41BE_15EE47FBF2B6_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D934A1A5_FD82_8FD3_41DD_652ADC251E40",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E331BD_FD82_8F30_41E1_42FA9E714C4F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A80D47_E2E2_F100_41C0_43DBB002B52E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E2D1BD_FD82_8F30_41E6_8F73C3CFA620",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D93471A6_FD82_8FD1_41C1_4908E8F34587",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A8FCBD_E2E5_B701_41E5_A62C06648365_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E64A08F5_FC83_FD33_41BF_097C73FCEFFF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93651A7_FD82_8FDF_41D6_52CFE4209023",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D931C1A7_FD82_8FDF_41DB_A91089C1F89C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A94105_E2E3_B101_41E7_261B7D6CA8DA_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D931B1A7_FD82_8FDF_41C4_360FA10A9CFE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D90C91AA_FD82_8FD1_41DA_3CD102741504",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B5B341_E2E2_9100_41B6_BF3227E1A4F3_0_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "id": "AnimatedImageResource_D90C21AA_FD82_8FD1_41C6_4DC2F617BED9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B4F80A_E2E2_9F00_41EB_01668AA4CBB1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E541BE_FD82_8F30_41EB_E6F43830279F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93361A8_FD82_8FD1_41B6_1A2E5C1E2950",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93321A9_FD82_8FD3_41D5_8EB9C40B1FD2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D932C1A9_FD82_8FD3_41E4_44B3E03160B1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "id": "AnimatedImageResource_D93291A9_FD82_8FD3_41A4_4C2430F2E7D8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8AEA3D6_E2E6_9100_41EA_2B703843D950_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93231A9_FD82_8FD3_41E9_8AD760DD5C45",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DF833677_FD82_953F_41D1_82F4C6FBEA3E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D6959C29_FD81_94D3_41EE_6D2CBC3B2762",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E271BD_FD82_8F30_41E1_C9F265D5B8EB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E211BD_FD82_8F30_41E7_65AFE7C6B27E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8A9F2FC_E2E2_B300_41E4_79334C5F4DE6_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D9E5A1BD_FD82_8F30_41CD_BDD1BD490515",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93731A6_FD82_8FD1_41EF_80A71905CCDB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D936F1A6_FD82_8FD1_41ED_2716C6F5A85F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B218B2_E2E2_7F00_41CE_9AED3432D062_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D93681A7_FD82_8FDF_41E1_15FEC09A7482",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D90DA1A9_FD82_8FD3_41E6_3C8F810E9329",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_D90D51AA_FD82_8FD1_41EB_7DAD4544D9FD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8BD13DD_E2E2_9100_41EB_0196D126870E_0_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "id": "AnimatedImageResource_D90CE1AA_FD82_8FD1_41E5_079A865D5B19",
 "rowCount": 6,
 "frameCount": 24
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player436"
 },
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getKey": function(key){  return window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } }
 },
 "gap": 10,
 "downloadEnabled": true,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
