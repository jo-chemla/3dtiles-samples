import"./modulepreload-polyfill-P2Xu9kJm.js";/* empty css               */import{$n as e,$t as t,Dt as n,Et as r,H as i,Jn as a,K as o,Nt as s,Rt as c,S as l,Tn as u,Tt as d,Un as f,Ut as p,Wt as m,Yn as h,_n as g,f as _,g as v,gn as y,h as b,i as x,j as S,wn as C,zt as ee}from"./three.module-DAcm9I_r.js";import{t as te}from"./TilesRenderer-CQuYpW4i.js";import{t as ne}from"./EnvironmentControls-D1-myfD3.js";import{t as re}from"./ImplicitTilingPlugin-BeJEy9Ku.js";import{t as ie}from"./DebugTilesPlugin-TSjTCtdC.js";import{t as ae}from"./lil-gui.module.min-F6ktE2kk.js";var w=new l;function oe(e,t){let n=`r/`,r=e.slice(1),i=Math.floor(r.length/t);for(let e=0;e<i;e++)n+=r.substr(e*t,t)+`/`;return n.slice(0,-1)}var T={POSITION_CARTESIAN:{name:`position`,size:12,type:`int32`},COLOR_PACKED:{name:`rgba`,size:4,type:`uint8`},RGB:{name:`rgb`,size:3,type:`uint8`},RGBA:{name:`rgba`,size:4,type:`uint8`},INTENSITY:{name:`intensity`,size:2,type:`uint16`},INTENSITY_GRADIENT:{name:`intensity gradient`,size:2,type:`uint16`},CLASSIFICATION:{name:`classification`,size:1,type:`uint8`},NORMAL_FLOATS:{name:`normal floats`,size:12,type:`float32`},NORMAL_SPHEREMAPPED:{name:`normal spheremapped`,size:2,type:`uint8`},NORMAL_OCT16:{name:`normal oct16`,size:2,type:`uint8`},GPS_TIME:{name:`gps-time`,size:8,type:`float64`},RETURN_NUMBER:{name:`return number`,size:1,type:`uint8`},NUMBER_OF_RETURNS:{name:`number of returns`,size:1,type:`uint8`},SOURCE_ID:{name:`point source id`,size:2,type:`uint16`},RGB565:{name:`rgb565`,size:2,type:`uint16`}};function se(e){return e.map(e=>{if(typeof e==`string`)return T[e];let t=T[e.name],n=e.size??e.elements*e.elementSize;return t?{...t,size:n}:{name:e.name.toLowerCase(),size:n,type:e.type}})}function ce(e){let{scale:t}=e,n=e.boundingBox;return{spacing:e.spacing,hierarchyStepSize:e.hierarchyStepSize,scale:[t,t,t],boundingBox:{min:[n.lx,n.ly,n.lz],max:[n.ux,n.uy,n.uz]},attributes:se(e.pointAttributes)}}function E(e,t,n){let r=new DataView(e),i=[t],a=0;for(let t=0;a+5<=e.byteLength;t++,a+=5){let e=r.getUint8(a),o=r.getUint32(a+1,!0),s=i[t];n.set(s,{childMask:e,numPoints:o});for(let t=0;t<8;t++)e&1<<t&&i.push(s+t)}}function le(e,t){for(let n=0,r=e.length;n<r;n++){let[r,i]=e[n];t.set(r,{childMask:0,numPoints:i})}t.forEach((e,n)=>{if(n.length>1){let e=t.get(n.slice(0,-1));e.childMask|=1<<parseInt(n.charAt(n.length-1))}})}function D(e,t,n,r,i){let a=new DataView(e,n,r),o=[t],s=0;for(let t=0;s+22<=r;t++,s+=22){let n=a.getUint8(s),r=a.getUint8(s+1),c=a.getUint32(s+2,!0),l=a.getBigInt64(s+6,!0),u=a.getBigInt64(s+14,!0),d=o[t];if(n===2&&t!==0)D(e,d,Number(l),Number(u),i);else{u===0n&&(c=0),i.set(d,{childMask:r,numPoints:c,byteOffset:l,byteSize:u});for(let e=0;e<8;e++)r&1<<e&&o.push(d+e)}}}function ue(e,t,n){let r=(e[0]+t[0])/2,i=(e[1]+t[1])/2,a=(e[2]+t[2])/2;return[[n&4?r:e[0],n&2?i:e[1],n&1?a:e[2]],[n&4?t[0]:r,n&2?t[1]:i,n&1?t[2]:a]]}var de=class{constructor(){this.fetchOptions={},this.version=null,this.metadata=null,this.hierarchy=null,this._dataDirUrl=null,this._octreeUrl=null,this._loadedChunks=null,this._inlineHierarchy=!1}fetchData(e,t){return fetch(e,t)}async _fetchBuffer(e,t){let n=await this.fetchData(e,t);if(!n.ok)throw Error(`PotreeLoader: Could not fetch "${e}" with status ${n.status}`);return n.arrayBuffer()}async load(e){let t=e.split(`/`).pop(),n=e.slice(0,e.lastIndexOf(`/`)+1),r=t===`metadata.json`?2:1,i=await this.fetchData(e,this.fetchOptions);if(!i.ok)throw Error(`PotreeLoader: Could not fetch "${e}" with status ${i.status}`);let a=await i.json();if(r===2&&a.encoding&&a.encoding!==`DEFAULT`)throw Error(`PotreeLoader: "${a.encoding}" encoded point data is not supported`);if(r===1&&!Array.isArray(a.pointAttributes))throw Error(`PotreeLoader: "${a.pointAttributes}" node files are not supported`);this.version=r,this.metadata=r===2?a:ce(a),this.hierarchy=new Map,r===2?(this._octreeUrl=new URL(`octree.bin`,n).href,D(await this._fetchBuffer(new URL(`hierarchy.bin`,n).href,this.fetchOptions),`r`,0,a.hierarchy.firstChunkSize,this.hierarchy)):(this._dataDirUrl=new URL(a.octreeDir+`/`,n).href,this._inlineHierarchy=!!a.hierarchy,this._inlineHierarchy?le(a.hierarchy,this.hierarchy):(E(await this._fetchBuffer(new URL(`r/r.hrc`,this._dataDirUrl).href,this.fetchOptions),`r`,this.hierarchy),this._loadedChunks=new Set([`r`])))}async loadNodeData(e,t={}){let n=this.hierarchy.get(e),r={...this.fetchOptions,...t};if(this.version===2){if(n.byteSize===0n)return new ArrayBuffer(0);let e=n.byteOffset,t=n.byteOffset+n.byteSize-1n;return this._fetchBuffer(this._octreeUrl,{...r,headers:{...r.headers,Range:`bytes=${e}-${t}`}})}if(this._inlineHierarchy)return this._fetchBuffer(`${this._dataDirUrl}${e}.bin`,r);{let{hierarchyStepSize:t}=this.metadata,n=e.length-1,i=oe(e,t);return n%t===0&&!this._loadedChunks.has(e)&&(this._loadedChunks.add(e),E(await this._fetchBuffer(`${this._dataDirUrl}${i}/${e}.hrc`,r),e,this.hierarchy)),this._fetchBuffer(`${this._dataDirUrl}${i}/${e}.bin`,r)}}parsePointData(e,t,n,r){let{attributes:i,scale:a,offset:o}=this.metadata,s=0,c=i.map(e=>{let t=s;return s+=e.size,t}),l=Math.floor(e.byteLength/s),u=new h((n[0]+r[0])/2,(n[1]+r[1])/2,(n[2]+r[2])/2),d=i.findIndex(e=>e.name===`position`),f=i.findIndex(e=>e.name===`rgb`||e.name===`rgba`),p=i.findIndex(e=>e.name===`intensity`),m=new Float32Array(l*3),g=f===-1?null:new Float32Array(l*3),_=p===-1?null:new Float32Array(l),y=new DataView(e),x=this.version===1?n:o;for(let e=0;e<l;e++){let t=e*s,n=t+c[d];if(m[e*3]=y.getInt32(n,!0)*a[0]+x[0]-u.x,m[e*3+1]=y.getInt32(n+4,!0)*a[1]+x[1]-u.y,m[e*3+2]=y.getInt32(n+8,!0)*a[2]+x[2]-u.z,f!==-1){let n=i[f],r=t+c[f];n.type===`uint16`?(w.setRGB(y.getUint16(r,!0)/65535,y.getUint16(r+2,!0)/65535,y.getUint16(r+4,!0)/65535,C),w.toArray(g,e*3)):(w.setRGB(y.getUint8(r)/255,y.getUint8(r+1)/255,y.getUint8(r+2)/255,C),w.toArray(g,e*3))}if(p!==-1){let n=t+c[p];_[e]=y.getUint16(n,!0)/65535}}let S=new v;return S.setAttribute(`position`,new b(m,3)),g&&S.setAttribute(`color`,new b(g,3)),_&&S.setAttribute(`intensity`,new b(_,1)),{geometry:S,center:u}}},O=class extends m{get isPointCloudMaterial(){return!0}get activeNodes(){return this.uniforms.uActiveNodes.value}set activeNodes(e){let t=this.uniforms.uActiveNodes.value!==null;this.uniforms.uActiveNodes.value=e,t!==(e!==null)&&this._updateDefines()}get pointShape(){return this._pointShape}set pointShape(e){e!==this._pointShape&&(this._pointShape=e,this._updateDefines())}get minPointSize(){return this.uniforms.uMinPointSize.value}set minPointSize(e){this.uniforms.uMinPointSize.value=e}get maxPointSize(){return this.uniforms.uMaxPointSize.value}set maxPointSize(e){this.uniforms.uMaxPointSize.value=e}get edlStrength(){return this.uniforms.uEdlStrength.value}set edlStrength(e){let t=this.uniforms.uEdlStrength.value>0;this.uniforms.uEdlStrength.value=e,t!==e>0&&this._updateDefines()}get edlRadius(){return this.uniforms.uEdlRadius.value}set edlRadius(e){this.uniforms.uEdlRadius.value=e}get debugColorMode(){return this._debugColorMode}set debugColorMode(e){e!==this._debugColorMode&&(this._debugColorMode=e,this._updateDefines())}constructor(e={}){let{pointShape:t=`round`,minPointSize:n=2,maxPointSize:r=50,debugColorMode:i=`none`,edlStrength:o=0,edlRadius:s=1.4,...c}=e;super(c),this._pointShape=t,this._debugColorMode=i,this.defines={},this.uniforms={uActiveNodes:{value:null},uNodeSize:{value:1},uNodeTransform:{value:new d},uMinPointSize:{value:n},uMaxPointSize:{value:r},uTileId:{value:0},uEdlTexture:{value:null},uEdlResolution:{value:new a(1,1)},uEdlStrength:{value:o},uEdlRadius:{value:s},uEdlDepthPass:{value:!1}},this._updateDefines(),this.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace(`uniform float size;`,`
						uniform float size;
						uniform float uMinPointSize;
						uniform float uMaxPointSize;

						varying vec3 vViewPosition;
						varying float vRadius;
						varying float vNodeId;
						varying float vDepth;
						varying float vLogDepth;

						#ifdef LOD_SIZING

						uniform usampler2D uActiveNodes;
						uniform float uNodeSize;
						uniform mat4 uNodeTransform;

						// number of set bits below the given bit index
						uint numberOfOnes( uint mask, int index ) {

							uint bitsBelow = mask & ( ( 1u << uint( index ) ) - 1u );
							uint count = 0u;
							for ( int i = 0; i < 8; i ++ ) {

								count += ( bitsBelow >> uint( i ) ) & 1u;

							}

							return count;

						}

						// Walks the hierarchy texture, returning the deepest active depth (x), an id
						// for that node (y) and its lod offset (z). The id comes from the octant
						// path so it stays stable as the texture is re-encoded. Adapted from
						// "getLOD" in potree's pointcloud.vs.
						vec3 getActiveDepth( vec3 posInNode ) {

							int textureWidth = textureSize( uActiveNodes, 0 ).x;
							vec3 offset = vec3( 0.0 );
							int nodeIndex = 0;
							uint nodePath = 0u;
							float lodOffset = 0.0;
							int depth = 0;
							for ( ; depth < 20; depth ++ ) {

								uvec4 value = texelFetch( uActiveNodes, ivec2( nodeIndex % textureWidth, nodeIndex / textureWidth ), 0 );

								// octant of the current node containing the point
								float nodeSize = uNodeSize / pow( 2.0, float( depth ) );
								vec3 index3d = floor( ( posInNode - offset ) / nodeSize + 0.5 );
								int octant = int( 4.0 * index3d.x + 2.0 * index3d.y + index3d.z );
								uint octantMask = 1u << uint( octant );

								// stop when the octant holds no active child
								uint childMask = value.r;
								if ( ( childMask & octantMask ) == 0u ) {

									lodOffset = float( value.a ) / 10.0 - 10.0;
									break;

								}

								// child texel: the first child offset plus the active siblings below it
								nodeIndex += int( value.g * 256u + value.b + numberOfOnes( childMask, octant ) );
								offset += nodeSize * 0.5 * index3d;

								// offset by one so trailing zeroes still change the id
								nodePath = nodePath * 8u + uint( octant ) + 1u;

							}

							// kept under 2^24 so the id survives the trip through a float varying
							return vec3( float( depth ), float( nodePath % 16777216u ), lodOffset );

						}

						#endif
					`).replace(`#include <logdepthbuf_vertex>`,`
						vec3 activeResult = vec3( 0.0 );
						#ifdef LOD_SIZING

							activeResult = getActiveDepth( ( uNodeTransform * vec4( position, 1.0 ) ).xyz );

						#endif

						float worldSize = size / pow( 2.0, activeResult.x + activeResult.z );

						// three's "scale" omits the 1 / tan( fov / 2 ) term, so its attenuation is
						// not world scale. The projection y scale restores it, as potree does.
						// Orthographic projections have no distance falloff at all.
						float projFactor = scale * projectionMatrix[ 1 ][ 1 ];
						if ( isPerspectiveMatrix( projectionMatrix ) ) {

							projFactor /= - mvPosition.z;

						}

						#ifdef USE_SIZEATTENUATION

							gl_PointSize = worldSize * projFactor;
							gl_PointSize = max( gl_PointSize, uMinPointSize );

							// a world size point seen from very close covers thousands of pixels and a
							// cloud of them stalls on fill rate, so the projected size can be capped
							if ( uMaxPointSize > 0.0 ) {

								gl_PointSize = min( gl_PointSize, uMaxPointSize );

							}

						#else

							// without attenuation "size" is in pixels, as PointsMaterial draws it
							gl_PointSize = max( size, uMinPointSize );

						#endif

						vViewPosition = mvPosition.xyz;
						vNodeId = activeResult.y;
						vDepth = activeResult.x;

						// half the world size the sprite covers, including the pixel clamp
						vRadius = 0.5 * gl_PointSize / projFactor;
						vLogDepth = log2( - mvPosition.z );

						#include <logdepthbuf_vertex>
					`),e.fragmentShader=e.fragmentShader.replace(`uniform float opacity;`,`
					uniform float opacity;
					uniform mat4 projectionMatrix;
					uniform float uTileId;

					varying vec3 vViewPosition;
					varying float vRadius;
					varying float vNodeId;
					varying float vDepth;
					varying float vLogDepth;

					#ifdef EDL_ENABLED

						uniform sampler2D uEdlTexture;
						uniform vec2 uEdlResolution;
						uniform float uEdlStrength;
						uniform float uEdlRadius;
						uniform bool uEdlDepthPass;

						// Darken by how far this point sits behind a ring of neighbors in the
						// pre-pass target. Adapted from potree's "edl.fs".
						float edlShade( float logDepth ) {

							vec2 uv = gl_FragCoord.xy / uEdlResolution;
							vec2 uvRadius = uEdlRadius / uEdlResolution;

							float sum = 0.0;
							for ( int i = 0; i < 8; i ++ ) {

								float angle = 6.2831853 * float( i ) / 8.0;
								vec2 offset = uvRadius * vec2( cos( angle ), sin( angle ) );
								float neighborDepth = texture2D( uEdlTexture, uv + offset ).r;

								// zero means nothing was drawn there, so it contributes nothing
								if ( neighborDepth != 0.0 ) {

									sum += max( 0.0, logDepth - neighborDepth );

								}

							}

							return exp( - ( sum / 8.0 ) * 300.0 * uEdlStrength );

						}

					#endif

					// spread sequential ids into visually distinct colors
					vec3 idToColor( float id ) {

						return vec3(
							fract( sin( id * 12.9898 ) * 43758.5453 ),
							fract( sin( id * 78.2330 ) * 12543.2341 ),
							fract( sin( id * 3.7010 ) * 26445.3450 )
						);

					}
					`).replace(`#include <color_fragment>`,`
					#include <color_fragment>

					#ifdef DEBUG_NODE_COLORS

						diffuseColor.rgb = idToColor( vNodeId + 1.0 );

					#endif

					// the tile the point came from, rather than the node it is sized by
					#ifdef DEBUG_TILE_COLORS

						diffuseColor.rgb = idToColor( uTileId + 1.0 );

					#endif

					// one hue per level
					#ifdef DEBUG_DEPTH_COLORS

						float hue = vDepth / 8.0;
						diffuseColor.rgb = clamp( abs( fract( hue + vec3( 0.0, 2.0 / 3.0, 1.0 / 3.0 ) ) * 6.0 - 3.0 ) - 1.0, 0.0, 1.0 );

					#endif
					`).replace(`#include <colorspace_fragment>`,`
					#include <colorspace_fragment>

					#ifdef EDL_ENABLED

						// shade after the color space conversion so the falloff lands on the
						// encoded color, as potree's post process does
						gl_FragColor.rgb *= edlShade( vLogDepth );

					#endif
					`).replace(`#include <clipping_planes_fragment>`,`
					#include <clipping_planes_fragment>

					#if defined( ROUND_POINTS ) || defined( SPHERE_POINTS )

						vec2 pointOffset = gl_PointCoord * 2.0 - 1.0;

					#endif

					#ifdef ROUND_POINTS

						// discard the sprite corners so points draw as circles
						if ( dot( pointOffset, pointOffset ) > 1.0 ) discard;

					#endif

					#ifdef SPHERE_POINTS

						// Intersect the view ray with the point's sphere and write that depth so
						// overlapping points meet as solid spheres rather than flat discs. The
						// fragment sits on the sprite plane, at the point's depth, so perspective
						// rays run from the eye through it and orthographic rays run from it.
						bool isPerspective = isPerspectiveMatrix( projectionMatrix );
						vec3 spritePosition = vViewPosition + vec3( pointOffset * vRadius, 0.0 );
						vec3 rayOrigin = isPerspective ? vec3( 0.0 ) : spritePosition;
						vec3 rayDirection = isPerspective ? normalize( spritePosition ) : vec3( 0.0, 0.0, - 1.0 );

						vec3 centerOffset = rayOrigin - vViewPosition;
						float halfB = dot( centerOffset, rayDirection );
						float disc = halfB * halfB - dot( centerOffset, centerOffset ) + vRadius * vRadius;
						if ( disc < 0.0 ) discard;

						vec3 hitPosition = rayOrigin + rayDirection * ( - halfB - sqrt( disc ) );
						vec4 clipPosition = projectionMatrix * vec4( hitPosition, 1.0 );
						gl_FragDepth = ( clipPosition.z / clipPosition.w ) * 0.5 + 0.5;

					#endif

					#ifdef EDL_ENABLED

						// the pre-pass only needs the log depth, so return before the color work
						if ( uEdlDepthPass ) {

							gl_FragColor = vec4( vLogDepth, 0.0, 0.0, 1.0 );
							return;

						}

					#endif
					`)}}_updateDefines(){let e={};this.uniforms.uActiveNodes.value!==null&&(e.LOD_SIZING=``),this.uniforms.uEdlStrength.value>0&&(e.EDL_ENABLED=``),this._pointShape===`round`&&(e.ROUND_POINTS=``),this._pointShape===`sphere`&&(e.SPHERE_POINTS=``),this._debugColorMode===`node`&&(e.DEBUG_NODE_COLORS=``),this._debugColorMode===`depth`&&(e.DEBUG_DEPTH_COLORS=``),this._debugColorMode===`tile`&&(e.DEBUG_TILE_COLORS=``),this.defines=e,this.needsUpdate=!0}},k=1.7;function A(e){let t=0;for(let n=0,r=e.length;n<r;n++)t=(t*8+parseInt(e[n])+1)%16777216;return t}function fe(e,t,n,r){let i=``;for(let a=e-1;a>=0;a--)i+=4*(t>>a&1)+2*(n>>a&1)+(r>>a&1);return i}function j(e){let n=new S(new Uint8Array(e*e*4),e,e,t,f);return n.internalFormat=`RGBA8UI`,n.minFilter=s,n.magFilter=s,n}var pe=class{constructor(){this.texture=j(1)}update(e){let t=new Set([``]);for(let n of e)for(let e=n.length;e>0&&!t.has(n.slice(0,e));e--)t.add(n.slice(0,e));let n=[...t].sort((e,t)=>e.length===t.length?e<t?-1:1:e.length-t.length),r=!1,i=this.texture,a=Math.ceil(Math.sqrt(n.length));a>i.image.width&&(i.dispose(),i=j(a),this.texture=i,r=!0);let o=i.image.data;o.fill(0);let s=new Map;for(let e=0,t=n.length;e<t;e++){let t=n[e];if(s.set(t,e),o[e*4+3]=100,e===0)continue;let r=s.get(t.slice(0,-1));if(o[r*4]===0){let t=e-r;o[r*4+1]=t>>8,o[r*4+2]=t&255}let i=parseInt(t.charAt(t.length-1));o[r*4]|=1<<i}return i.needsUpdate=!0,r}dispose(){this.texture.dispose()}},M=new a,N=new l,P=new d,F=class extends r{constructor(e){let t=new v;t.setDrawRange(0,0),super(t,new n({colorWrite:!1,depthWrite:!1})),this.frustumCulled=!1,this.renderOrder=-1/0,this.onBeforeRender=e}dispose(){this.geometry.dispose(),this.material.dispose()}},I=class{get adaptivePointSize(){return this._adaptivePointSize}set adaptivePointSize(e){e!==this._adaptivePointSize&&(this._adaptivePointSize=e,this._updateMaterials())}get pointScale(){return this._pointScale}set pointScale(e){e!==this._pointScale&&(this._pointScale=e,this._updateMaterials())}get pointShape(){return this._pointShape}set pointShape(e){e!==this._pointShape&&(this._pointShape=e,this._updateMaterials())}get minPointSize(){return this._minPointSize}set minPointSize(e){e!==this._minPointSize&&(this._minPointSize=e,this._updateMaterials())}get maxPointSize(){return this._maxPointSize}set maxPointSize(e){e!==this._maxPointSize&&(this._maxPointSize=e,this._updateMaterials())}get edlStrength(){return this._edlStrength}set edlStrength(e){e!==this._edlStrength&&(this._edlStrength=e,this._updateMaterials())}get edlRadius(){return this._edlRadius}set edlRadius(e){this._edlRadius=e}get debugColorMode(){return this._debugColorMode}set debugColorMode(e){e!==this._debugColorMode&&(this._debugColorMode=e,this._updateMaterials())}constructor(t={}){let{pointShape:n=`round`,minPointSize:r=2,maxPointSize:a=50,edlStrength:c=0,edlRadius:l=1.4,debugColorMode:u=`none`,adaptivePointSize:d=!1,pointScale:f=1}=t;this.name=`POINT_CLOUD_EFFECTS_PLUGIN`,this.tiles=null,this._pointShape=n,this._minPointSize=r,this._maxPointSize=a,this._debugColorMode=u,this._edlStrength=c,this._edlRadius=l,this._adaptivePointSize=d,this._pointScale=f,this._activeNodes=new Map,this._octreeMaterials=new WeakMap,this._activeSetDirty=!1,this._onUpdateAfter=()=>{this._activeSetDirty&&(this._activeSetDirty=!1,this._updateActiveNodes())},this._edlTarget=new e(1,1,{format:g,type:i,minFilter:s,magFilter:s}),this._edlGroup=new o,this._edlGroup.matrixWorldAutoUpdate=!1,this._edlHook=new F((e,t,n)=>this._renderDepthPass(e,n))}init(e){this.tiles=e,e.group.add(this._edlHook),e.addEventListener(`update-after`,this._onUpdateAfter)}dispose(){this.tiles.removeEventListener(`update-after`,this._onUpdateAfter),this._activeNodes.forEach(e=>e.dispose()),this._activeNodes.clear(),this._edlHook.removeFromParent(),this._edlHook.dispose(),this._edlTarget.dispose(),this.tiles=null}setTileActive(){this._activeSetDirty=!0}disposeTile(){this._activeSetDirty=!0}processTileModel(e,t){let n=this._getOctreeNode(t);n&&e.updateMatrixWorld(!0),e.traverse(e=>{if(e.isPoints){if(!e.material.isPointCloudMaterial){let t=e.material;e.material=new O({color:t.color,vertexColors:t.vertexColors,size:t.size,sizeAttenuation:t.sizeAttenuation,map:t.map,transparent:t.transparent,opacity:t.opacity}),t.dispose()}n&&e.material.activeNodes===null&&this._initOctreeMaterial(e,n),this._applyToMaterial(e.material)}})}_renderDepthPass(e,t){if(this.edlStrength<=0)return;let n=this._edlTarget;e.getDrawingBufferSize(M),(n.width!==M.x||n.height!==M.y)&&n.setSize(M.x,M.y);let r=this._edlGroup.children;r.length=0,this.tiles.group.traverseVisible(e=>{if(!e.isPoints||!e.material.isPointCloudMaterial)return;r.push(e);let{uniforms:t}=e.material;t.uEdlTexture.value=null,t.uEdlDepthPass.value=!0});let i=e.getRenderTarget(),a=e.getClearAlpha();e.getClearColor(N),e.setRenderTarget(n),e.setClearColor(0,0),e.clear(),e.render(this._edlGroup,t),e.setRenderTarget(i),e.setClearColor(N,a),r.forEach(t=>{let{uniforms:r}=t.material;r.uEdlTexture.value=n.texture,r.uEdlResolution.value.set(n.width,n.height),r.uEdlRadius.value=this.edlRadius*e.getPixelRatio(),r.uEdlDepthPass.value=!1}),r.length=0}_getOctreeNode(e){let t=e.implicitTilingData;if(!t)return null;let{root:n}=t;return n.refine!==`ADD`||n.implicitTiling.subdivisionScheme!==`OCTREE`||!n.boundingVolume.box?null:{root:n,path:fe(t.level,t.x,t.y,t.z)}}_getActiveNodes(e){return this._activeNodes.has(e)||this._activeNodes.set(e,new pe),this._activeNodes.get(e)}_initOctreeMaterial(e,t){let{root:n,path:r}=t,{material:i}=e,[a,o,s,c,l,u,d,f,p,m,h,g]=n.boundingVolume.box;P.set(2*c,2*d,2*m,a-c-d-m,2*l,2*f,2*h,o-l-f-h,2*u,2*p,2*g,s-u-p-g,0,0,0,1).premultiply(n.engineData.transform).invert();let{uniforms:_}=i;_.uNodeTransform.value.multiplyMatrices(P,e.matrixWorld),_.uNodeSize.value=1,_.uTileId.value=A(r),this._octreeMaterials.set(i,{root:n,size:i.size,sizeAttenuation:i.sizeAttenuation})}_updateActiveNodes(){let{tiles:e}=this,t=new Map;this._activeNodes.forEach((e,n)=>t.set(n,[])),e.activeTiles.forEach(e=>{let n=this._getOctreeNode(e);n&&(t.has(n.root)||t.set(n.root,[]),t.get(n.root).push(n.path))});let n=new Set;t.forEach((e,t)=>{this._getActiveNodes(t).update(e)&&n.add(t)}),n.size!==0&&e.forEachLoadedModel((e,t)=>{let r=this._getOctreeNode(t);if(!r||!n.has(r.root))return;let{texture:i}=this._activeNodes.get(r.root);e.traverse(e=>{e.material&&e.material.isPointCloudMaterial&&e.material.activeNodes!==null&&(e.material.activeNodes=i)})})}_applyToMaterial(e){let t=this._octreeMaterials.get(e);if(t){let{adaptivePointSize:n}=this,r=n||t.sizeAttenuation;e.activeNodes=n?this._getActiveNodes(t.root).texture:null,e.size=n?t.root.geometricError*k*this.pointScale:t.size,e.sizeAttenuation!==r&&(e.sizeAttenuation=r,e.needsUpdate=!0)}e.pointShape=this.pointShape,e.minPointSize=this.minPointSize,e.maxPointSize=this.maxPointSize,e.debugColorMode=this.debugColorMode,e.edlStrength=this.edlStrength}_updateMaterials(){this.tiles&&this.tiles.forEachLoadedModel(e=>{e.traverse(e=>{e.material&&e.material.isPointCloudMaterial&&this._applyToMaterial(e.material)})})}};function L(e){return e.split(`/`).pop().replace(/\.potree$/,``)}function R(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2,(t[0]-e[0])/2,0,0,0,(t[1]-e[1])/2,0,0,0,(t[2]-e[2])/2]}function z(e){let[t,n,r,i,,,,a,,,,o]=e;return[[t-i,n-a,r-o],[t+i,n+a,r+o]]}var me=class extends I{constructor(e={}){super(e);let{url:t=null,useRecommendedSettings:n=!0}=e;this.name=`POTREE_PLUGIN`,this.priority=-1e3,this.url=t,this.loader=null,this.useRecommendedSettings=n}init(e){super.init(e),this.useRecommendedSettings&&(e.errorTarget=1);let t=new de;t.fetchOptions=e.fetchOptions,t.fetchData=(t,n)=>e.invokeOnePlugin(e=>e.fetchData&&e.fetchData(t,n)),this.loader=t}dispose(){super.dispose(),this.loader=null}async loadRootTileset(){let{tiles:e,url:t,loader:n}=this,r=new URL(t??e.rootURL,location.href).href;e.invokeAllPlugins(e=>{r=e.preprocessURL?e.preprocessURL(r,null):r}),await n.load(r);let{spacing:i,boundingBox:a}=n.metadata,o={asset:{version:`1.1`},geometricError:1/0,root:{refine:`ADD`,geometricError:i,boundingVolume:{box:R(a.min,a.max)},content:{uri:`r.potree`},children:[]}};return e.preprocessTileset(o,r.slice(0,r.lastIndexOf(`/`)+1)),o}fetchData(e,t){return/\.potree$/.test(e)?this.loader.loadNodeData(L(e),t):null}parseToMesh(e,t,n,r){if(n!==`potree`)return null;let i=L(r),[a,o]=z(t.boundingVolume.box),{geometry:s,center:c}=this.loader.parsePointData(e,i,a,o),{spacing:l,boundingBox:u}=this.loader.metadata,d=new O({vertexColors:!!s.attributes.color,size:l*k*this.pointScale});d.activeNodes=this._getActiveNodes(this).texture,d.uniforms.uTileId.value=A(i.slice(1)),d.uniforms.uNodeSize.value=u.max[0]-u.min[0],d.uniforms.uNodeTransform.value.makeTranslation(c.x-u.min[0],c.y-u.min[1],c.z-u.min[2]);let f=new p(s,d);return f.position.copy(c),f.updateMatrix(),this._expandChildren(t,i),f}disposeTile(e){super.disposeTile(e);let{processNodeQueue:t}=this.tiles;for(let n=0,r=e.children.length;n<r;n++)t.remove(e.children[n]);e.children.length=0}_expandChildren(e,t){let{loader:n}=this,r=n.hierarchy.get(t),[i,a]=z(e.boundingVolume.box),o=e.geometricError/2;for(let n=0;n<8;n++){let s=t+n;if(!(r.childMask&1<<n))continue;let[c,l]=ue(i,a,n);e.children.push({refine:`ADD`,geometricError:o,boundingVolume:{box:R(c,l)},content:{uri:`${s}.potree`},children:[]})}}_getOctreeNode(e){return e.content?{root:this,path:L(e.content.uri).slice(1)}:null}_updateMaterials(){super._updateMaterials();let{metadata:e}=this.loader??{};e&&this.tiles.forEachLoadedModel(t=>{t.material.size=e.spacing*k*this.pointScale})}},B=`https://raw.githubusercontent.com/potree/potree/refs/heads/develop/pointclouds/`,V={lion:`${B}lion_takanawa/cloud.js`,"lion normals":`${B}lion_takanawa_normals/cloud.js`,heidentor:`http://5.9.65.151/mschuetz/potree/resources/pointclouds/archpro/heidentor/cloud.js`,retz:`http://5.9.65.151/mschuetz/potree/resources/pointclouds/riegl/retz/cloud.js`,"vol total":`${B}vol_total/cloud.js`,"lion 3d tiles implicit":`https://jo-chemla.github.io/3dtiles-samples/lion_takanawa/implicit-octree/tileset.json`},H,U,W,G,K,q,J,Y,X=new a,Z={orthographic:!1,enable:!0,errorTarget:1,pointScale:1,adaptivePointSize:!0,pointShape:`sphere`,edl:!0,edlStrength:.4,edlRadius:1.4,debugColorMode:`none`,displayBoxBounds:!1,dataset:new URLSearchParams(location.search).get(`dataset`)??`lion`};he();function he(){q=new x({antialias:!0}),q.setPixelRatio(window.devicePixelRatio),q.setSize(window.innerWidth,window.innerHeight),q.setClearColor(1118481),q.setAnimationLoop(_e),document.body.appendChild(q.domElement),K=new u,U=new ee(60,window.innerWidth/window.innerHeight,.1,1e3),W=new c,H=U,H.position.set(4,2,8),H.lookAt(0,0,0),G=new ne(K,H,q.domElement),G.enableDamping=!0,G.minDistance=.25,G.maxDistance=50,G.cameraRadius=0,G.useFallbackPlane=!0,G.raycaster.params.Points.threshold=.05,Q();let e=new a;q.domElement.addEventListener(`pointerdown`,t=>{e.set(t.clientX,t.clientY)}),q.domElement.addEventListener(`pointerup`,t=>{if(Math.abs(t.clientX-e.x)>2||Math.abs(t.clientY-e.y)>2)return;let n=new y;n.params.Points.threshold=.2,X.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),n.setFromCamera(X,H);let r=n.intersectObject(J.group,!0)[0];r&&J.forEachLoadedModel((e,t)=>{e===r.object&&(window.TILE=t,console.log(t))})});let t=new ae;t.add(Z,`dataset`,Object.keys(V)).onChange(Q),t.addFolder(`camera`).add(Z,`orthographic`).onChange(ge);let n=t.addFolder(`tiles`);n.add(Z,`enable`),n.add(Z,`errorTarget`,.5,16,.1).name(`error target`).onChange(e=>{J.errorTarget=e});let r=t.addFolder(`points`);r.add(Z,`adaptivePointSize`).name(`adaptive size (3d tiles)`).onChange(e=>{Y.adaptivePointSize=e}),r.add(Z,`pointScale`,.25,4).name(`point scale`).onChange(e=>{Y.pointScale=e}),r.add(Z,`pointShape`,[`square`,`round`,`sphere`]).name(`point shape`).onChange(e=>{Y.pointShape=e}),r.add(Z,`edl`).name(`edl`).onChange(e=>{Y.edlStrength=e?Z.edlStrength:0}),r.add(Z,`edlStrength`,.05,2).name(`edl strength`).onChange(e=>{Z.edl&&(Y.edlStrength=e)}),r.add(Z,`edlRadius`,1,4,.01).name(`edl radius`).onChange(e=>{Y.edlRadius=e});let i=t.addFolder(`debug`);i.add(Z,`displayBoxBounds`).name(`bounding boxes`).onChange(e=>{J.getPluginByName(`DEBUG_TILES_PLUGIN`).displayBoxBounds=e}),i.add(Z,`debugColorMode`,[`none`,`node`,`depth`,`tile`]).name(`color mode`).onChange(e=>{Y.debugColorMode=e}),$(),window.addEventListener(`resize`,$)}function Q(){J&&J.dispose();let e=V[Z.dataset],t=/\.json$/.test(e);J=new te(t?e:void 0),Y=new(t?I:me)({url:e,adaptivePointSize:Z.adaptivePointSize,pointScale:Z.pointScale,pointShape:Z.pointShape,debugColorMode:Z.debugColorMode,edlStrength:Z.edl?Z.edlStrength:0,edlRadius:Z.edlRadius}),J.registerPlugin(Y),t&&J.registerPlugin(new re),J.registerPlugin(new ie({displayBoxBounds:Z.displayBoxBounds})),J.errorTarget=Z.errorTarget,J.setCamera(H),J.group.rotation.x=-Math.PI/2,K.add(J.group),J.addEventListener(`load-root-tileset`,()=>{let e=new _,t=new h;J.group.updateMatrixWorld(),J.getBoundingBox(e),e.applyMatrix4(J.group.matrixWorld),e.getCenter(t),J.group.position.sub(t),e.translate(t.negate());let n=e.getSize(t).length()*.5;H.position.set(.6,.4,1).normalize().multiplyScalar(n*2.5),H.lookAt(0,0,0),U.near=n/100,U.far=n*100,W.top=n,W.bottom=-n,W.near=-n*100,W.far=n*100,$(),G.minDistance=n/50,G.maxDistance=n*20,G.raycaster.params.Points.threshold=n/200,G.fallbackPlane.constant=-e.min.y})}function ge(e){let t=H;H=e?W:U,H.position.copy(t.position),H.quaternion.copy(t.quaternion),J.deleteCamera(t),J.setCamera(H),G.setCamera(H),$()}function $(){let e=window.innerWidth/window.innerHeight;U.aspect=e,U.updateProjectionMatrix(),W.left=-W.top*e,W.right=W.top*e,W.updateProjectionMatrix(),q.setSize(window.innerWidth,window.innerHeight)}function _e(){G.update(),Z.enable&&(J.setCamera(H),J.setResolutionFromRenderer(H,q),J.update()),q.render(K,H)}
//# sourceMappingURL=potree-DSZ74lrk.js.map