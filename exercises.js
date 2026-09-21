/* ============================================================
   SPOTCHECK — EXERCISE LIBRARY
   ------------------------------------------------------------
   Every exercise in the app lives here. index.html reads this file.

   To add a filmed video to any exercise, set:
     correctVideoId: 'YOUTUBE_ID'   (the correct-form clip)
     mistakeVideoId: 'YOUTUBE_ID'   (the common-mistake clip)
   Leave as null and the app shows a placeholder box instead.

   equip controls which icon shows on the grid circle. Valid values:
     'barbell' | 'dumbbell' | 'cable' | 'machine' | 'kettlebell' | 'bodyweight'

   group is used for filtering. Valid values:
     'legs' | 'chest' | 'back' | 'shoulders' | 'arms' | 'core' | 'full'
   ============================================================ */

const exercises = [

  /* ===== FILMED — these four have real video ===== */

  {
    id: 'bench', name: 'Bench Press', riskTag: 'Shoulder', equip: 'barbell', group: 'chest',
    correctVideoId: 'veotNun_5QI', mistakeVideoId: null,
    aliases: ['bench press', 'barbell bench press', 'flat bench press', 'flat barbell bench press', 'supine bench press', 'paused bench press', 'wide grip bench press', 'bench'],
    cues: [
      'Shoulder blades pulled back and down into the bench',
      'Feet flat, driving into the floor',
      'Elbows roughly 45 degrees from your torso, not flared',
      'Bar lowers under control, no bounce off the chest'
    ],
    mistakeTitle: 'Flared elbows / bouncing the bar',
    mistakePoints: [
      'Elbows flare straight out to the sides at 90 degrees',
      'Bar bounces off the chest for extra momentum'
    ],
    why: 'Why it matters: the textbook-looking flared elbow actually loads the rotator cuff badly, and this is the mistake that most looks like proper form. Bouncing the bar adds uncontrolled force to the chest and shoulders.'
  },
  {
    id: 'lat-pulldown', name: 'Lat Pulldown', riskTag: 'Shoulder', equip: 'cable', group: 'back',
    correctVideoId: '5T7eRp7zgh0', mistakeVideoId: null,
    aliases: ['lat pulldown', 'lat pull down', 'lat pull-down', 'pulldown', 'pull-down'],
    cues: [
      'Grip slightly wider than shoulder width',
      'Pull the bar to your upper chest, elbows driving down and back',
      'Slight backward lean only, no swinging',
      'Control the bar back up, do not let it snap'
    ],
    mistakeTitle: 'Using body momentum to pull',
    mistakePoints: [
      'Leaning back hard and using body swing to move the bar',
      'Pulling the bar behind the neck'
    ],
    why: 'Why it matters: swinging shifts the work off your lats and onto momentum, and pulling behind the neck puts the shoulder in a risky, impingement-prone position.'
  },
  {
    id: 'preacher-curl', name: 'Preacher Curl', riskTag: 'Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: 'x5msSk0wwiQ', mistakeVideoId: null,
    aliases: ['preacher curl'],
    cues: [
      'Upper arms flat against the pad the entire set',
      'Full range of motion, arm straightens at the bottom without locking hard',
      'Curl with control, no torso or shoulder swing',
      'Squeeze at the top without shrugging up'
    ],
    mistakeTitle: 'Swinging / cheat curls',
    mistakePoints: [
      'Shoulders or torso jerk to help lift the weight',
      'Elbows lift off the pad mid-rep'
    ],
    why: 'Why it matters: momentum takes the work off the bicep and shifts strain onto the elbow and shoulder, and the elbow lifting off the pad under load is especially rough on the joint.'
  },
  {
    id: 'leg-press', name: 'Leg Press', riskTag: 'Lower Back / Knee', equip: 'machine', group: 'legs',
    correctVideoId: 'c8Nd3cHA7eY', mistakeVideoId: null,
    aliases: ['leg press', 'horizontal leg press', 'sled leg press', 'single leg press'],
    cues: [
      'Feet shoulder-width on the platform, flat',
      'Lower back and hips stay flush against the seat',
      'Control the descent, knees track over your toes',
      'Do not lock your knees out hard at the top'
    ],
    mistakeTitle: 'Hips lifting off the seat',
    mistakePoints: [
      'Lower back and hips round or lift off the pad at the bottom of the rep',
      'Knees cave inward during the push'
    ],
    why: 'Why it matters: when hips lift off the seat, load shifts onto a rounded lower spine, a common way people get hurt chasing extra depth or weight on this machine.'
  },

  /* ===== SQUAT PATTERN — BARBELL ===== */

  {
    id: 'back-squat', name: 'Barbell Back Squat', riskTag: 'Knee / Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['back squat', 'barbell back squat', 'barbell squat', 'squat'],
    cues: [
      'Bar rests on your traps or rear delts, core braced before descending',
      'Feet roughly shoulder-width, knees track over your toes',
      'Break at the hips and knees together, chest stays tall',
      'Descend to a depth you control, drive up through your whole foot'
    ],
    mistakeTitle: 'Knees caving in / heels lifting',
    mistakePoints: ['Knees collapse inward as the weight gets heavy', 'Heels rise off the floor, weight shifts onto the toes'],
    why: 'Why it matters: caving knees put shear stress on the ACL and MCL, and losing heel contact shifts load onto the lower back and knees instead of the big leg muscles built to handle it.'
  },
  {
    id: 'front-squat', name: 'Front Squat', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['front squat'],
    cues: [
      'Bar rests across your front delts, elbows lifted high to create a shelf',
      'Torso stays as upright as possible through the descent',
      'Knees track over your toes, break at hips and knees together',
      'Elbows stay up through the whole rep, not dropping as you fatigue'
    ],
    mistakeTitle: 'Elbows dropping / torso collapsing forward',
    mistakePoints: ['Elbows drop as the set gets hard, letting the bar roll forward', 'Torso pitches forward, turning it into a bent-over position'],
    why: 'Why it matters: dropped elbows shift load onto the wrists and lower back instead of the legs, and a forward-collapsing torso under a loaded bar puts the lower spine at risk.'
  },
  {
    id: 'overhead-squat', name: 'Overhead Squat', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['overhead squat'],
    cues: [
      'Wide snatch grip, bar locked out directly over your midfoot',
      'Actively push up into the bar the entire rep',
      'Squat between your arms with an upright torso',
      'Start far lighter than your back squat, this is a mobility test as much as a lift'
    ],
    mistakeTitle: 'Bar drifting forward out of the overhead position',
    mistakePoints: ['Bar drifts in front of the midfoot as you descend', 'Lower back arches hard to compensate for tight shoulders or ankles'],
    why: 'Why it matters: this is the least forgiving barbell lift for mobility limits. When the bar drifts forward the shoulders take load in an unstable overhead position and the lower back arches to keep you upright.'
  },
  {
    id: 'box-squat', name: 'Box Squat', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['box squat'],
    cues: [
      'Set the box so your hips reach roughly parallel or just below',
      'Sit back onto the box under control, do not drop onto it',
      'Stay tight and braced while touching the box',
      'Drive up without rocking backward first'
    ],
    mistakeTitle: 'Slamming down onto the box',
    mistakePoints: ['Dropping onto the box and relaxing at the bottom', 'Rocking backward then forward to build momentum out of the hole'],
    why: 'Why it matters: crashing onto a box sends compressive force straight up your spine, and relaxing at the bottom means you lose the brace right when your lower back needs it most.'
  },
  {
    id: 'pin-squat', name: 'Pin Squat', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pin squat'],
    cues: [
      'Set pins at the target depth before loading the bar',
      'Descend under control and settle the bar on the pins without relaxing',
      'Stay braced through the pause, then drive up',
      'Use less weight than a normal squat, the dead stop removes all stretch reflex'
    ],
    mistakeTitle: 'Relaxing under the bar at the pins',
    mistakePoints: ['Letting the brace go while the bar rests on the pins', 'Jerking upward to break the bar off the pins'],
    why: 'Why it matters: losing your brace under a loaded bar and then jerking to restart the lift is a common way people tweak their lower back on this variation.'
  },
  {
    id: 'pause-squat', name: 'Pause Squat', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pause squat', 'paused squat'],
    cues: [
      'Descend to depth with the same control as a normal squat',
      'Hold the bottom position for the full count while staying braced',
      'Keep your chest up and knees tracking during the pause',
      'Drive up without bouncing out of the hole'
    ],
    mistakeTitle: 'Losing position during the pause',
    mistakePoints: ['Chest drops and the back rounds while holding the bottom', 'Knees drift inward as you sit in the pause'],
    why: 'Why it matters: the pause is exactly when fatigue makes position slip, and holding a rounded back or caved knees under load is worse than the same fault passed through quickly.'
  },
  {
    id: 'sumo-squat', name: 'Sumo Squat', riskTag: 'Hip / Knee', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['sumo squat'],
    cues: [
      'Wide stance with toes turned out roughly 30 to 45 degrees',
      'Knees track in line with your toes, not inside them',
      'Chest stays tall, sit straight down between your feet',
      'Drive through the outside of your feet to stand'
    ],
    mistakeTitle: 'Knees collapsing inward on a turned-out stance',
    mistakePoints: ['Knees cave in toward each other instead of tracking over the toes', 'Stance so wide that the hips cannot reach depth without the pelvis tucking'],
    why: 'Why it matters: a wide turned-out stance makes knee-cave more likely, and pushing past your hip mobility forces the pelvis to tuck under, rounding the lower back at the bottom.'
  },
  {
    id: 'zercher-squat', name: 'Zercher Squat', riskTag: 'Lower Back / Elbow', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['zercher squat'],
    cues: [
      'Bar sits in the crook of your elbows, hands clasped in front of your chest',
      'Brace hard, this position pulls you forward more than a back squat',
      'Keep your chest up and elbows inside your knees at the bottom',
      'Use padding or a towel on the bar until you get used to it'
    ],
    mistakeTitle: 'Rounding forward under the front-loaded bar',
    mistakePoints: ['Upper back rounds as the bar pulls you forward', 'Bar slips lower down the forearms mid-set'],
    why: 'Why it matters: the front-loaded position constantly pulls you into flexion, so a lapse in bracing rounds the spine under load. A slipping bar also puts sudden uneven stress on the elbows.'
  },
  {
    id: 'safety-bar-squat', name: 'Safety Bar Squat', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['safety bar squat', 'safety squat bar'],
    cues: [
      'Bar yoke sits on your traps with the handles in front of your shoulders',
      'Hold the handles or the rack, whichever keeps your torso upright',
      'Brace hard, the cambered weight pushes you forward',
      'Squat with the same depth and knee tracking as a back squat'
    ],
    mistakeTitle: 'Letting the camber pull you into a forward lean',
    mistakePoints: ['Torso tips forward as the cambered weight shifts in front of you', 'Upper back rounds trying to fight the forward pull'],
    why: 'Why it matters: this bar is often used because it is easier on the shoulders, but the cambered load actively pulls you forward, so bracing matters more here than on a straight bar.'
  },
  {
    id: 'barbell-hack-squat', name: 'Barbell Hack Squat', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell hack squat'],
    cues: [
      'Bar starts on the floor behind your heels',
      'Squat down and grip the bar with a flat back',
      'Drive up through your heels, keeping the bar close to your legs',
      'Chest stays up throughout, this is a squat not a deadlift'
    ],
    mistakeTitle: 'Turning it into a rounded-back deadlift',
    mistakePoints: ['Hips shoot up first and the back rounds to pull the bar', 'Bar drifts away from your legs during the lift'],
    why: 'Why it matters: because you reach behind you to grip the bar, this easily degrades into a rounded-back pull, which is the single most common way people hurt their lower back lifting from the floor.'
  },
  {
    id: 'heel-elevated-squat', name: 'Heel-Elevated Squat', riskTag: 'Knee', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['heel elevated squat', 'heel-elevated squat'],
    cues: [
      'Heels on a small wedge or plates, no more than an inch or two',
      'Torso stays upright, this variation lets you sit more vertically',
      'Knees travel forward over the toes, that is intended here',
      'Keep your whole foot in contact, do not let the heel slide off the plate'
    ],
    mistakeTitle: 'Using an unstable or overly high elevation',
    mistakePoints: ['Stacking plates so high that the ankle position becomes unstable', 'Heels sliding off the edge of the plate mid-rep'],
    why: 'Why it matters: knee-forward travel is fine and intended here, but an unstable heel platform under a loaded bar is a genuine fall risk. Use a solid wedge rather than a stack of loose plates.'
  },
  {
    id: 'belt-squat', name: 'Belt Squat', riskTag: 'Knee', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['belt squat'],
    cues: [
      'Belt sits on your hips, load hanging between your legs',
      'Stand tall and hold the handles lightly for balance only',
      'Squat with normal depth and knee tracking',
      'Let the belt load your hips rather than pulling with your arms'
    ],
    mistakeTitle: 'Hanging on the handles to assist the lift',
    mistakePoints: ['Pulling hard on the handles to help stand up', 'Belt riding up onto the waist instead of sitting on the hips'],
    why: 'Why it matters: this machine exists to load the legs without loading the spine, so pulling with your arms defeats the point. A belt riding up onto the waist also puts uncomfortable pressure on the ribs and lower back.'
  },
  {
    id: 'jefferson-squat', name: 'Jefferson Squat', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['jefferson squat', 'jefferson deadlift'],
    cues: [
      'Straddle the bar with one foot forward and one back, bar between your legs',
      'Grip with one hand in front and one behind, flat back throughout',
      'Drive up evenly, resisting the natural pull to rotate',
      'Alternate which side leads between sets so you load both directions'
    ],
    mistakeTitle: 'Letting the torso rotate under load',
    mistakePoints: ['Torso twists toward the leading side as you stand up', 'Only ever training one stance, loading the spine asymmetrically'],
    why: 'Why it matters: this lift is inherently asymmetric, so the spine is being asked to resist rotation under load. Always training one side, or letting the twist happen, loads the lower back unevenly over time.'
  },

  /* ===== HINGE PATTERN — BARBELL ===== */

  {
    id: 'deadlift', name: 'Conventional Deadlift', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['deadlift', 'conventional deadlift', 'barbell deadlift', 'pause deadlift'],
    cues: [
      'Bar over mid-foot, shins close to the bar before pulling',
      'Flat back, chest up, brace your core hard before lifting',
      'Push the floor away with your legs as the bar rises',
      'Bar stays close to your body the whole way up'
    ],
    mistakeTitle: 'Rounding the lower back',
    mistakePoints: ['Lower back rounds to reach the bar or during the pull', 'Bar drifts away from the legs, turning it into a bent-over row'],
    why: 'Why it matters: a rounded spine under load is one of the most common ways lifters injure a disc, and flexion plus heavy load is exactly what the deadlift setup is meant to avoid.'
  },
  {
    id: 'sumo-deadlift', name: 'Sumo Deadlift', riskTag: 'Lower Back / Hip', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['sumo deadlift'],
    cues: [
      'Wide stance, toes turned out, hands inside your knees',
      'Drop your hips and push your knees out over your toes',
      'Chest up, back flat, take the slack out of the bar before pulling',
      'Drive your feet out and down rather than just pulling with your back'
    ],
    mistakeTitle: 'Hips shooting up before the bar moves',
    mistakePoints: ['Hips rise first, turning the lift into a stiff-legged pull', 'Knees collapse inward as you break the floor'],
    why: 'Why it matters: when the hips shoot up first, the leg drive that makes sumo work disappears and the lower back takes the load in a bent-over position it was not set up for.'
  },
  {
    id: 'rdl', name: 'Romanian Deadlift', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['romanian deadlift', 'rdl'],
    cues: [
      'Slight knee bend, hinge at the hips while keeping your back flat',
      'Bar stays close, sliding down your thighs',
      'Go as low as your hamstring flexibility allows without rounding',
      'Drive your hips forward to stand back up'
    ],
    mistakeTitle: 'Rounding the back to chase depth',
    mistakePoints: ['Lower back rounds trying to lower the weight further', 'Knees bend too much, turning it into a squat instead of a hinge'],
    why: 'Why it matters: rounding under a loaded hinge is a common way people strain their lower back. Depth should be limited by hamstring flexibility, not by how far you can round.'
  },
  {
    id: 'stiff-leg-deadlift', name: 'Stiff Leg Deadlift', riskTag: 'Lower Back / Hamstring', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['stiff leg deadlift', 'straight leg deadlift'],
    cues: [
      'Knees stay almost straight but never locked out hard',
      'Hinge at the hips with a flat back, bar close to your legs',
      'Lower only as far as your hamstrings allow without the back rounding',
      'Squeeze your glutes to drive back to standing'
    ],
    mistakeTitle: 'Locking the knees and rounding to reach the floor',
    mistakePoints: ['Knees locked rigid, forcing the lower back to make up the range', 'Rounding the back to touch the bar to the floor every rep'],
    why: 'Why it matters: with the knees straight, any extra range has to come from spinal flexion, so chasing floor contact on this lift is directly training a rounded loaded back.'
  },
  {
    id: 'deficit-deadlift', name: 'Deficit Deadlift', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['deficit deadlift'],
    cues: [
      'Stand on a low platform, usually one to two inches only',
      'Set up with the same flat back you would use from the floor',
      'Reduce the weight, the extra range makes this harder than a normal pull',
      'Stop the set when your back position starts to slip'
    ],
    mistakeTitle: 'Using a deficit too high for your mobility',
    mistakePoints: ['Platform so high that the back rounds just to reach the bar', 'Keeping normal deadlift weight despite the longer range'],
    why: 'Why it matters: the whole point is training the bottom range, but if you cannot reach the bar with a flat back, the deficit is just teaching your spine to round under maximum load.'
  },
  {
    id: 'rack-pull', name: 'Rack Pull', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['rack pull'],
    cues: [
      'Set pins so the bar starts at or just below the knee',
      'Same flat-back setup as a deadlift, do not get sloppy because the range is short',
      'Take the slack out before pulling, no jerking off the pins',
      'Lower under control rather than dropping the bar onto the pins'
    ],
    mistakeTitle: 'Getting careless because the range is short',
    mistakePoints: ['Rounding the back because the weight is heavier than a full deadlift', 'Yanking the bar off the pins from a dead stop'],
    why: 'Why it matters: people load rack pulls much heavier than their deadlift, which means a rounded back here carries even more force than usual. Jerking off the pins adds a sharp spike on top of that.'
  },
  {
    id: 'hex-bar-deadlift', name: 'Hex Bar Deadlift', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hex bar deadlift', 'trap bar deadlift'],
    cues: [
      'Stand in the centre of the bar, feet hip-width',
      'Hinge and grip the handles with a flat back and chest up',
      'Push the floor away, standing up with the load at your sides',
      'Lower under control rather than dropping it'
    ],
    mistakeTitle: 'Hips rising before the bar leaves the floor',
    mistakePoints: ['Hips shoot up first, converting it into a stiff-legged pull', 'Rounding the upper back because the load feels easier than a straight bar'],
    why: 'Why it matters: the hex bar is often chosen because it is friendlier to the lower back, but that only holds if you keep the flat-back position. Hips rising early throws the load right back onto the spine.'
  },
  {
    id: 'zercher-deadlift', name: 'Zercher Deadlift', riskTag: 'Lower Back / Elbow', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['zercher deadlift'],
    cues: [
      'Bar hooked in the crook of your elbows, hands clasped',
      'Brace extremely hard, the front load pulls you into flexion',
      'Drive up with your legs, keeping your chest as high as you can',
      'Start light, this position exposes any weakness in bracing'
    ],
    mistakeTitle: 'Upper back rounding under the front load',
    mistakePoints: ['Upper back rounds as the bar pulls forward', 'Loading it like a conventional deadlift'],
    why: 'Why it matters: the front-loaded position makes upper back rounding almost inevitable if the weight is too heavy, and the lift offers no easy way to bail if the position collapses.'
  },
  {
    id: 'behind-back-deadlift', name: 'Behind the Back Deadlift', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['behind the back deadlift', 'hack lift'],
    cues: [
      'Bar starts on the floor behind your heels',
      'Squat down to grip it with a flat back and chest up',
      'Bar stays in contact with your legs as you stand',
      'Keep shoulders back, do not let them roll forward under the load'
    ],
    mistakeTitle: 'Shoulders rolling forward to reach behind you',
    mistakePoints: ['Shoulders round forward as you reach back for the bar', 'Bar scrapes away from the legs, pulling you off balance'],
    why: 'Why it matters: gripping behind your body pulls the shoulders into a rounded position under load, which is a vulnerable spot for the shoulder joint and encourages the upper back to round with it.'
  },
  {
    id: 'good-morning', name: 'Good Morning', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['good morning', 'bodyweight good morning'],
    cues: [
      'Bar on your traps like a back squat, core braced hard',
      'Soft knees, hinge forward at the hips with a flat back',
      'Go only as far as you can hold a neutral spine',
      'Squeeze your glutes to drive back upright'
    ],
    mistakeTitle: 'Going too heavy on a long spinal lever',
    mistakePoints: ['Back rounds as you hinge forward under the bar', 'Loading it like a squat when the leverage is far less forgiving'],
    why: 'Why it matters: with the bar on your back and your torso horizontal, your spine is under a long lever arm. This is one of the least forgiving exercises for going too heavy, and rounding here is exactly how people herniate discs.'
  },
  {
    id: 'barbell-glute-bridge', name: 'Barbell Glute Bridge', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell glute bridge'],
    cues: [
      'Lie flat, bar across your hips with padding',
      'Feet flat and close enough that your shins are vertical at the top',
      'Drive through your heels and squeeze your glutes',
      'Stop at a straight line from knees to shoulders, do not arch past it'
    ],
    mistakeTitle: 'Hyperextending the lower back at lockout',
    mistakePoints: ['Arching the lower back hard to get extra height', 'Ribs flaring up instead of the hips finishing the movement'],
    why: 'Why it matters: extra height at the top comes from arching the lumbar spine rather than from the glutes, which puts a compressive load exactly where this exercise is supposed to be building protection.'
  },
  {
    id: 'hip-thrust', name: 'Hip Thrust', riskTag: 'Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hip thrust', 'barbell hip thrust'],
    cues: [
      'Upper back braced on the bench, bar or weight over your hips',
      'Drive through your heels, squeezing your glutes at the top',
      'Avoid overextending your lower back at the top of the rep',
      'Chin tucked slightly, do not crane your neck back'
    ],
    mistakeTitle: 'Hyperextending the lower back at the top',
    mistakePoints: ['Arching the lower back hard to get extra height at the top', 'Pushing through the toes instead of the heels'],
    why: 'Why it matters: hyperextending the spine at lockout shifts load off the glutes and onto the lumbar spine, which is exactly what this exercise is supposed to protect.'
  },
  {
    id: 'reverse-hyper', name: 'Reverse Hyperextension', riskTag: 'Lower Back', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse hyperextension', 'reverse hyper'],
    cues: [
      'Hips at the edge of the pad, torso supported and hands gripping the handles',
      'Raise your legs to roughly in line with your torso',
      'Control the swing rather than letting the weight throw your legs',
      'Stop at horizontal, do not arch up past it'
    ],
    mistakeTitle: 'Swinging into hyperextension',
    mistakePoints: ['Using momentum so the legs swing well above horizontal', 'Lower back arching hard at the top of each swing'],
    why: 'Why it matters: momentum turns this into repeated forced hyperextension of the lumbar spine, which is the opposite of the controlled decompression people usually use this machine for.'
  },
  {
    id: 'back-extension', name: 'Back Extension', riskTag: 'Lower Back', equip: 'machine', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['back extension', 'hyperextension', 'machine back extension'],
    cues: [
      'Pad just below your hip bones so you can hinge freely',
      'Lower with a flat back until you feel your hamstrings load',
      'Rise until your body is in a straight line',
      'Do not arch backward past neutral at the top'
    ],
    mistakeTitle: 'Arching hard past neutral at the top',
    mistakePoints: ['Cranking backward into hyperextension at the top of each rep', 'Rounding the spine at the bottom then snapping up'],
    why: 'Why it matters: repeatedly swinging from a rounded bottom to an over-arched top is a lot of end-range spinal movement under load, which irritates the lower back rather than strengthening it.'
  },
  {
    id: 'glute-ham-raise', name: 'Glute Ham Raise', riskTag: 'Hamstring / Knee', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['glute ham raise', 'ghr'],
    cues: [
      'Feet secured, knees just behind the pad',
      'Lower yourself slowly with a straight line from knees to shoulders',
      'Control the descent, this is mostly an eccentric exercise',
      'Use your hands on the pad for assistance if you cannot control the lowering'
    ],
    mistakeTitle: 'Dropping through the bottom half',
    mistakePoints: ['Falling rather than lowering once the hamstrings fatigue', 'Hips piking backward to shorten the lever'],
    why: 'Why it matters: this movement produces very high hamstring tension at long muscle length, and losing control of the descent is exactly the scenario where hamstring strains happen.'
  },
  {
    id: 'nordic-curl', name: 'Nordic Hamstring Curl', riskTag: 'Hamstring', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['nordic hamstring curl', 'nordic curl'],
    cues: [
      'Kneel with your ankles anchored securely',
      'Keep a straight line from knees to shoulders, no hip bend',
      'Lower as slowly as you can control, then catch yourself with your hands',
      'Push back up with your hands until your hamstrings can take over'
    ],
    mistakeTitle: 'Bending at the hips to cheat the lever',
    mistakePoints: ['Hips pike backward so the torso folds instead of the body staying straight', 'Free-falling once past the point of control'],
    why: 'Why it matters: this is one of the most demanding hamstring exercises there is, and the uncontrolled drop at the end of your range is precisely where a strain is most likely. Build the range gradually.'
  },
  {
    id: 'reverse-nordic', name: 'Reverse Nordic Curl', riskTag: 'Knee / Quad', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse nordic curl', 'reverse nordic'],
    cues: [
      'Kneel tall with your body in a straight line from knees to head',
      'Lean backward slowly, keeping your hips extended',
      'Only go as far as you can control and return from',
      'Build range over weeks rather than forcing depth on day one'
    ],
    mistakeTitle: 'Leaning back further than you can control',
    mistakePoints: ['Dropping backward past the point where you can return under control', 'Hips bending so the movement becomes a backbend instead of a quad exercise'],
    why: 'Why it matters: this loads the quads and knee under a long stretch, and going past your controllable range puts sudden strain on the knee joint and quad tendon.'
  },

  /* ===== LUNGE / SINGLE LEG ===== */

  {
    id: 'lunge', name: 'Walking Lunge', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['lunge', 'walking lunge', 'dumbbell lunge', 'barbell lunge'],
    cues: [
      'Step far enough that your front knee stays over your ankle, not past your toes',
      'Torso stays upright, core braced',
      'Lower until your back knee nears the floor with control',
      'Push through your front heel to return'
    ],
    mistakeTitle: 'Front knee collapsing inward or past the toes',
    mistakePoints: ['Knee caves inward as you push back up', 'Torso pitches forward, dumping weight onto the front knee'],
    why: 'Why it matters: a caving or overloaded front knee puts uneven stress on the ligaments around the joint, a common way lunges cause knee pain when weight or step length outpaces control.'
  },
  {
    id: 'reverse-lunge', name: 'Reverse Lunge', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse lunge', 'barbell reverse lunge', 'trx reverse lunge'],
    cues: [
      'Step backward rather than forward, front foot stays planted',
      'Lower straight down until the back knee nears the floor',
      'Front shin stays roughly vertical, weight through the front heel',
      'Drive through the front leg to return to standing'
    ],
    mistakeTitle: 'Torso pitching forward over the front knee',
    mistakePoints: ['Leaning forward so the load transfers onto the front knee', 'Stepping back too short, forcing the knee well past the toes'],
    why: 'Why it matters: reverse lunges are usually gentler on the knee than forward lunges, but only if the step is long enough and the torso stays upright. A short step undoes that advantage entirely.'
  },
  {
    id: 'side-lunge', name: 'Side Lunge', riskTag: 'Knee / Groin', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['side lunge', 'lateral lunge', 'trx side lunge'],
    cues: [
      'Step wide to the side, both feet pointing forward',
      'Sit back into the hip of the bending leg, keeping the other leg straight',
      'Bending knee tracks over the foot, not inward',
      'Push off the bent leg to return to centre'
    ],
    mistakeTitle: 'Bending knee caving in over a fixed foot',
    mistakePoints: ['Knee collapses inward while the foot stays planted', 'Forcing depth beyond your groin flexibility'],
    why: 'Why it matters: a caving knee over a planted foot creates twisting stress at the joint, and pushing past your adductor flexibility is a common way people strain their groin on this movement.'
  },
  {
    id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bulgarian split squat', 'rear foot elevated split squat', 'dumbbell bulgarian split squat', 'zercher bulgarian split squat', 'smith machine bulgarian split squat'],
    cues: [
      'Rear foot elevated on a bench, front foot far enough forward for a stable base',
      'Torso stays upright, core braced',
      'Lower straight down until your back knee nears the floor',
      'Weight stays through your front heel and midfoot'
    ],
    mistakeTitle: 'Front knee driving past the toes',
    mistakePoints: ['Front knee travels far past the toes and takes on most of the load', 'Torso pitches forward, adding strain to the lower back'],
    why: 'Why it matters: this exercise is unforgiving on one leg. Letting the knee overshoot the toes and the torso collapse forward puts uneven, high stress on the front knee joint.'
  },
  {
    id: 'split-squat', name: 'Split Squat', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['split squat', 'dumbbell split squat', 'static lunge', 'trx suspended lunge'],
    cues: [
      'Feet in a staggered stance, both pointing forward',
      'Lower straight down, not forward',
      'Front shin roughly vertical at the bottom',
      'Weight balanced between both legs, torso upright'
    ],
    mistakeTitle: 'Drifting forward instead of straight down',
    mistakePoints: ['Body travels forward so the front knee shoots past the toes', 'Back foot rolls or the ankle collapses inward'],
    why: 'Why it matters: the movement should be vertical. Drifting forward loads the front knee at a bad angle, and an unstable back foot makes the whole position wobble under load.'
  },
  {
    id: 'step-up', name: 'Step Up', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['step up', 'step ups'],
    cues: [
      'Box height at or just below knee level to start',
      'Place your whole foot on the box, not just the toes',
      'Drive up through the working leg without pushing off the floor',
      'Lower under control instead of dropping back down'
    ],
    mistakeTitle: 'Pushing off the trailing leg',
    mistakePoints: ['Bouncing off the back foot to get up rather than using the working leg', 'Box so high the knee is deeply bent at the start'],
    why: 'Why it matters: pushing off the back leg removes the point of the exercise, and a box that is too high puts the working knee in a deeply flexed, heavily loaded position at the weakest part of the range.'
  },
  {
    id: 'pistol-squat', name: 'Pistol Squat', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pistol squat', 'single leg squat', 'kettlebell pistol squat'],
    cues: [
      'Stand on one leg with the other extended in front',
      'Sit back and down under control, arms forward for balance',
      'Keep your knee tracking over your foot the whole way',
      'Use a box or counterweight to regress until you can control the full range'
    ],
    mistakeTitle: 'Collapsing into the bottom position',
    mistakePoints: ['Dropping the last few inches once control runs out', 'Knee caving inward as you fight to stand back up'],
    why: 'Why it matters: this puts your full body weight through one deeply flexed knee. Crashing into the bottom or letting the knee cave under that load is where the injury risk lives, not in the movement itself.'
  },
  {
    id: 'sissy-squat', name: 'Sissy Squat', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['sissy squat', 'smith machine sissy squat'],
    cues: [
      'Hold a support for balance, rise onto the balls of your feet',
      'Lean back while bending the knees, keeping hips extended',
      'Go only as deep as you can control and reverse',
      'Build range slowly, this loads the knee in a stretched position'
    ],
    mistakeTitle: 'Forcing depth the knees are not ready for',
    mistakePoints: ['Dropping into deep knee flexion before building tolerance', 'Losing control and dropping the last portion of the descent'],
    why: 'Why it matters: this deliberately loads the quads and patellar tendon in a deeply flexed, knee-forward position. It can be trained safely, but only if range is built gradually rather than jumped into.'
  },
  {
    id: 'wall-sit', name: 'Wall Sit', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['wall sit'],
    cues: [
      'Back flat against the wall, thighs roughly parallel to the floor',
      'Knees stacked over your ankles, not past your toes',
      'Feet flat, weight through your heels',
      'Breathe steadily rather than holding your breath'
    ],
    mistakeTitle: 'Sliding down so the knees pass the toes',
    mistakePoints: ['Feet placed too close to the wall, forcing knees far forward', 'Holding your breath through the burn'],
    why: 'Why it matters: feet too close to the wall drives the knees well past the toes under sustained load, which puts prolonged pressure on the knee joint rather than the quads.'
  },
  {
    id: 'squat-jump', name: 'Squat Jump', riskTag: 'Knee / Ankle', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['squat jump', 'explosive squat jump', 'jump squat'],
    cues: [
      'Quarter to half squat, then drive up explosively',
      'Land softly on the middle of your foot, knees bending to absorb',
      'Knees track over your toes on both takeoff and landing',
      'Stop the set when your landings stop being quiet and controlled'
    ],
    mistakeTitle: 'Landing stiff-legged or with knees caving',
    mistakePoints: ['Landing with straight legs so the joints absorb the impact instead of the muscles', 'Knees collapsing inward on landing'],
    why: 'Why it matters: landing is where jumping injuries happen. Stiff legs send impact straight into the knees and ankles, and an inward-caving knee on landing is a classic ACL injury mechanism.'
  },
  {
    id: 'box-jump', name: 'Box Jump', riskTag: 'Knee / Shin', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['box jump'],
    cues: [
      'Use a box you can land on comfortably with room to spare',
      'Land softly in a quarter squat, knees tracking over toes',
      'Step down rather than jumping down',
      'Reset fully between reps rather than rebounding'
    ],
    mistakeTitle: 'Chasing box height beyond what you can land',
    mistakePoints: ['Box so high you have to tuck your knees to your chest to clear it', 'Jumping down off the box repeatedly instead of stepping down'],
    why: 'Why it matters: a missed box jump means shins into a hard edge, which is a genuinely nasty and common gym injury. Jumping down also multiplies landing impact for no training benefit.'
  },

  /* ===== OLYMPIC / POWER ===== */

  {
    id: 'power-clean', name: 'Power Clean', riskTag: 'Lower Back / Wrist', equip: 'barbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['power clean', 'clean'],
    cues: [
      'Set up like a deadlift, bar over midfoot, flat back',
      'Pull the bar up your body, then extend hips explosively',
      'Drop under and catch on your front delts with high elbows',
      'Learn the positions light before adding load'
    ],
    mistakeTitle: 'Yanking with the arms and a rounded back',
    mistakePoints: ['Pulling early with the arms instead of driving with the hips', 'Back rounds off the floor because the weight is too heavy to move fast'],
    why: 'Why it matters: this is a technical lift moved at speed, which means bad positions get loaded fast. A rounded back at speed is far less forgiving than the same position in a slow deadlift.'
  },
  {
    id: 'hang-clean', name: 'Hang Clean', riskTag: 'Lower Back / Wrist', equip: 'barbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hang clean', 'hang power clean', 'kettlebell swing clean', 'dumbbell hang clean'],
    cues: [
      'Start standing with the bar at mid-thigh, shoulders slightly over the bar',
      'Hinge to just above the knee keeping a flat back',
      'Explode with the hips, then pull yourself under the bar',
      'Catch with high elbows and a braced core'
    ],
    mistakeTitle: 'Rounding the back in the hang position',
    mistakePoints: ['Back rounds as you lower to the hang', 'Catching with low elbows so the bar crashes onto the wrists'],
    why: 'Why it matters: the hang position is a loaded hinge, so rounding there carries the same disc risk as a bad deadlift. Low elbows on the catch dump the bar onto your wrists rather than your shoulders.'
  },
  {
    id: 'clean-and-jerk', name: 'Clean and Jerk', riskTag: 'Lower Back / Shoulder', equip: 'barbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['clean and jerk', 'clean and press', 'kettlebell clean and jerk', 'dumbbell clean and press'],
    cues: [
      'Clean the bar to your shoulders with high elbows and a braced core',
      'Reset your breath and brace before the jerk',
      'Dip straight down and drive the bar overhead, moving your head out of the way',
      'Lock out with the bar over your midfoot, not in front'
    ],
    mistakeTitle: 'Pressing out overhead instead of locking out',
    mistakePoints: ['Bar drifts in front and you grind it up with the shoulders', 'Lower back arches hard to finish the overhead portion'],
    why: 'Why it matters: grinding a heavy bar overhead in front of your midline stresses the shoulder in an unstable position and forces the lower back to arch to compensate. Failed jerks should be dumped, not saved.'
  },
  {
    id: 'snatch', name: 'Snatch', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['snatch', 'power snatch', 'muscle snatch', 'hang snatch'],
    cues: [
      'Wide grip, bar over midfoot, flat back at setup',
      'Pull the bar close to your body and extend explosively',
      'Punch up into the bar and catch it locked out overhead',
      'This lift rewards coaching, learn it with a light bar first'
    ],
    mistakeTitle: 'Catching with soft or unstable arms',
    mistakePoints: ['Elbows not fully locked at the catch', 'Bar caught behind or in front of the midline'],
    why: 'Why it matters: the snatch puts maximum load overhead in the least stable position in the gym. A soft elbow or an off-line catch is how shoulders get injured here, and bailing safely is a skill worth practising.'
  },
  {
    id: 'push-press', name: 'Push Press', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['push press', 'dumbbell push press', 'one arm kettlebell push press'],
    cues: [
      'Bar on your front delts, core and glutes braced',
      'Short dip straight down, knees only, torso stays vertical',
      'Drive up with the legs then finish with the shoulders',
      'Lock out with the bar over your midfoot'
    ],
    mistakeTitle: 'Dipping forward instead of straight down',
    mistakePoints: ['Torso leans forward in the dip so the bar travels out in front', 'Excessive lower back arch to finish the press'],
    why: 'Why it matters: a forward dip sends the bar on an arc away from your body, and the only way to finish that rep is by arching the lower back and pressing the load in front of the shoulder.'
  },
  {
    id: 'push-jerk', name: 'Push Jerk', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['push jerk', 'split jerk', 'double kettlebell split jerk'],
    cues: [
      'Dip and drive as in a push press, then drop under the bar',
      'Catch with locked elbows and the bar over your midfoot',
      'Stand to full extension only once the bar is stable overhead',
      'Practise bailing forward or backward before going heavy'
    ],
    mistakeTitle: 'Catching with bent elbows and pressing it out',
    mistakePoints: ['Receiving the bar with soft elbows then grinding it to lockout', 'Bar caught in front of the head instead of over the midline'],
    why: 'Why it matters: pressing out a bar you failed to lock overhead means the shoulder holds a heavy load at a mechanical disadvantage. Under a jerk, dropping the bar is safer than saving it.'
  },
  {
    id: 'thruster', name: 'Thruster', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['thruster', 'barbell thruster'],
    cues: [
      'Front rack position with high elbows, squat to full depth',
      'Drive out of the squat and let the momentum carry into the press',
      'Brace your core so the lower back does not arch at lockout',
      'Reduce load as fatigue builds, form fades fast on this one'
    ],
    mistakeTitle: 'Form collapsing under conditioning fatigue',
    mistakePoints: ['Elbows drop and the back rounds in the squat portion as you tire', 'Lower back arches badly to finish the press when the legs are gassed'],
    why: 'Why it matters: thrusters are usually programmed for high reps under fatigue, which is exactly when positions break down. The combination of a loaded squat and an overhead press means both the spine and shoulders pay for it.'
  },
  {
    id: 'clean-pull', name: 'Clean Pull', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['clean pull', 'clean high pull', 'snatch pull', 'snatch deadlift', 'dumbbell high pull'],
    cues: [
      'Deadlift setup with a flat back and the bar over midfoot',
      'Pull to the knee patiently, then accelerate with the hips',
      'Shrug and let the bar travel up close to your body',
      'Keep the arms relaxed until the hips have finished extending'
    ],
    mistakeTitle: 'Pulling with the arms and rounding the back',
    mistakePoints: ['Bending the arms early instead of driving with the hips', 'Back rounding because the load is heavier than you can move with speed'],
    why: 'Why it matters: these are usually loaded heavier than a full clean, so a rounded back here is under serious force. Early arm pull also puts sudden strain on the biceps tendon at high speed.'
  },

  /* ===== PRESS — BARBELL ===== */

  {
    id: 'ohp', name: 'Standing Overhead Barbell Press', riskTag: 'Lower Back / Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['overhead press', 'standing overhead press', 'standing overhead barbell press', 'overhead barbell press', 'military press', 'bodyweight military press', 'ohp'],
    cues: [
      'Grip just outside shoulder width, bar starts at collarbone height',
      'Brace your core and squeeze your glutes instead of arching to press',
      'Press straight up, moving your head back slightly to let the bar pass',
      'Lock out with the bar over your midfoot, not out in front'
    ],
    mistakeTitle: 'Excessive lower back arch',
    mistakePoints: ['Leaning back and arching hard to help drive the weight up', 'Pressing the bar out in front instead of straight overhead'],
    why: 'Why it matters: turning the press into a backbend shifts load onto the lumbar spine instead of the shoulders, and pressing out front adds unnecessary shoulder strain.'
  },
  {
    id: 'behind-neck-press', name: 'Behind the Neck Press', riskTag: 'Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['behind the neck press', 'behind neck press'],
    cues: [
      'Only attempt this if you have full pain-free overhead shoulder mobility',
      'Lower the bar only to ear or chin level, not to the base of the neck',
      'Keep the load light relative to your front press',
      'Stop immediately if you feel pinching in the shoulder'
    ],
    mistakeTitle: 'Lowering the bar deep behind the neck',
    mistakePoints: ['Bringing the bar all the way down to the base of the neck', 'Using the same load as a front press'],
    why: 'Why it matters: this puts the shoulder into deep external rotation and abduction at the same time, which is the most vulnerable position for the joint. Many lifters simply do not have the mobility to do it safely, and there are lower-risk ways to train the same muscles.'
  },
  {
    id: 'z-press', name: 'Z Press', riskTag: 'Lower Back / Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['z press', 'dumbbell z press'],
    cues: [
      'Sit on the floor with legs straight out in front',
      'Sit as tall as you can, bracing your core hard',
      'Press straight overhead without leaning back',
      'Use much less weight than a standing press'
    ],
    mistakeTitle: 'Leaning back to complete the press',
    mistakePoints: ['Rocking backward to get the bar overhead', 'Lower back rounding because hamstring tightness prevents sitting upright'],
    why: 'Why it matters: with no leg drive available, leaning back is the only cheat left, and doing it seated puts the load straight into an unsupported lumbar spine.'
  },
  {
    id: 'incline-bench', name: 'Incline Bench Press', riskTag: 'Shoulder', equip: 'barbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['incline bench press', 'paused incline bench press', 'smith machine incline bench press', 'incline machine bench press'],
    cues: [
      'Bench set to a moderate incline, roughly 30 to 45 degrees',
      'Shoulder blades pulled back and down into the bench',
      'Lower the bar to your upper chest with elbows around 45 degrees',
      'Press up without locking out violently'
    ],
    mistakeTitle: 'Setting the incline too steep and flaring the elbows',
    mistakePoints: ['Bench angle so steep it becomes a shoulder press', 'Elbows flaring to 90 degrees at the bottom'],
    why: 'Why it matters: a steep incline plus flared elbows puts the front of the shoulder in a stretched, loaded position at the bottom of every rep, which is a common route to front-shoulder pain.'
  },
  {
    id: 'decline-bench', name: 'Decline Bench Press', riskTag: 'Shoulder', equip: 'barbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['decline bench press', 'decline press'],
    cues: [
      'Secure your feet and legs under the pads before unracking',
      'Grip slightly wider than shoulder width',
      'Lower the bar to your lower chest under control',
      'Elbows tuck moderately, not flared to 90 degrees'
    ],
    mistakeTitle: 'Bouncing the bar off the chest',
    mistakePoints: ['Bar bounces off the chest for extra momentum', 'Elbows flare out wide at the bottom of the rep'],
    why: 'Why it matters: bouncing adds uncontrolled force through the chest and shoulders, and being inverted makes it harder to bail safely if a rep goes wrong. Always use a spotter here.'
  },
  {
    id: 'close-grip-bench', name: 'Close-Grip Bench Press', riskTag: 'Wrist / Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['close grip bench press', 'close-grip bench press', 'close grip incline bench press', 'close grip dumbbell bench press'],
    cues: [
      'Grip just inside shoulder width, not narrower',
      'Elbows tucked close to your torso',
      'Lower the bar to your lower chest under control',
      'Keep your wrists straight, stacked over your forearms'
    ],
    mistakeTitle: 'Gripping too narrow',
    mistakePoints: ['Hands only a few inches apart, bending the wrists back hard', 'Elbows flaring out despite the close grip'],
    why: 'Why it matters: a very narrow grip forces the wrists into extension under load, which is a common cause of wrist pain. Shoulder-width-minus-a-bit gets the triceps working without wrecking the wrists.'
  },
  {
    id: 'reverse-grip-bench', name: 'Reverse Grip Bench Press', riskTag: 'Shoulder / Wrist', equip: 'barbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse grip bench press'],
    cues: [
      'Use a supinated grip with thumbs firmly wrapped around the bar',
      'Always use a spotter or safety pins, the bar is harder to control',
      'Lower to the lower chest with elbows tucked',
      'Start very light, this grip changes the whole leverage'
    ],
    mistakeTitle: 'Using a thumbless grip or no spotter',
    mistakePoints: ['Bar resting on open palms without thumbs wrapped', 'Loading heavy without a spotter or safety bars set'],
    why: 'Why it matters: the underhand grip is inherently less secure, and a bar slipping off open palms onto your chest or throat is a serious injury. Wrap your thumbs and set the safeties every time.'
  },
  {
    id: 'floor-press', name: 'Floor Press', riskTag: 'Shoulder / Elbow', equip: 'barbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['floor press', 'barbell floor press'],
    cues: [
      'Lie on the floor with knees bent, bar over your chest',
      'Lower until your triceps touch the floor, then pause briefly',
      'Press up without bouncing your elbows off the ground',
      'Keep your shoulder blades pinned and elbows moderately tucked'
    ],
    mistakeTitle: 'Bouncing the elbows off the floor',
    mistakePoints: ['Letting the arms crash down and rebounding off the floor', 'Flaring elbows so the impact goes through the shoulder'],
    why: 'Why it matters: the floor gives you a hard stop, and slamming into it sends impact directly up through the elbow and into the shoulder rather than being absorbed by muscle.'
  },
  {
    id: 'spoto-press', name: 'Spoto Press', riskTag: 'Shoulder', equip: 'barbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['spoto press'],
    cues: [
      'Lower the bar to roughly an inch above your chest',
      'Pause fully with the bar held in the air, no touching',
      'Keep shoulder blades retracted through the pause',
      'Press up without letting the bar drift toward your face'
    ],
    mistakeTitle: 'Losing tightness during the floating pause',
    mistakePoints: ['Shoulders roll forward while holding the bar above the chest', 'Bar drifts up toward the neck during the pause'],
    why: 'Why it matters: holding a loaded bar just above your chest with the shoulders rolled forward puts the joint in a poor position under a long time under tension, and a drifting bar over the neck is a real hazard.'
  },
  {
    id: 'larsen-press', name: 'Larsen Press', riskTag: 'Shoulder', equip: 'barbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['larsen press', 'dumbbell larsen press'],
    cues: [
      'Lie on the bench with legs straight out, feet off the floor',
      'Shoulder blades still pulled back and down into the bench',
      'Lower and press with no leg drive at all',
      'Reduce the weight, you lose a lot of stability without your feet'
    ],
    mistakeTitle: 'Keeping normal bench weight with no base',
    mistakePoints: ['Loading as heavy as a regular bench press despite no leg drive', 'Body sliding or rocking on the bench mid-set'],
    why: 'Why it matters: removing your feet removes most of your stability, so the same weight is far harder to control. A wobbling bar over your chest with no base is a bad combination.'
  },
  {
    id: 'jm-press', name: 'JM Press', riskTag: 'Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['jm press'],
    cues: [
      'Close-ish grip, lower the bar toward your upper chest and throat area',
      'Elbows stay forward, forearms tucked toward your body',
      'Stop the descent before the bar reaches your neck',
      'Keep the weight modest, this is a triceps exercise not a max press'
    ],
    mistakeTitle: 'Going too heavy over the throat',
    mistakePoints: ['Loading it like a close-grip bench press', 'Lowering the bar all the way onto the throat'],
    why: 'Why it matters: this hybrid puts a bar directly over your neck at the bottom, and the elbow angle is already demanding. Heavy weight here risks both elbow strain and a genuinely dangerous bar position.'
  },
  {
    id: 'shoulder-pin-press', name: 'Shoulder Pin Press', riskTag: 'Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['shoulder pin press', 'bench pin press', 'pin press'],
    cues: [
      'Set pins at your chosen starting height inside the rack',
      'Brace fully before initiating, the dead stop removes any stretch reflex',
      'Press smoothly rather than jerking off the pins',
      'Lower the bar back to the pins under control'
    ],
    mistakeTitle: 'Jerking the bar off the pins',
    mistakePoints: ['Snatching at the bar to break it off the dead stop', 'Losing the brace between reps while the bar rests'],
    why: 'Why it matters: a sudden jerk from a dead stop loads the shoulder or lower back before the muscles are switched on, which is a common way people tweak something on pin work.'
  },
  {
    id: 'landmine-press', name: 'Landmine Press', riskTag: 'Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['landmine press', 'one arm landmine press', 'viking press', 'log press'],
    cues: [
      'Bar end in a landmine sleeve, hold the other end at shoulder height',
      'Brace your core, press up and slightly forward along the bar arc',
      'Do not lean back to finish the rep',
      'Keep your wrist straight, not bent back under the bar'
    ],
    mistakeTitle: 'Leaning back to complete the press',
    mistakePoints: ['Arching backward as the weight gets heavy', 'Rotating the torso to squeeze out extra reps on a one-arm version'],
    why: 'Why it matters: the landmine angle is usually chosen because it is shoulder-friendly, but leaning back or twisting to finish reps puts the strain right back on the lower back.'
  },
  {
    id: 'press-around', name: 'Press Around', riskTag: 'Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['press around'],
    cues: [
      'Press the bar in an arc around your head rather than straight up',
      'Keep the movement slow and deliberate',
      'Use light weight, the off-line path is much less stable',
      'Stop if you feel any pinching in the shoulder'
    ],
    mistakeTitle: 'Loading an off-line pressing path',
    mistakePoints: ['Using near-normal press weight on a curved bar path', 'Rushing the arc so the bar swings rather than being controlled'],
    why: 'Why it matters: pressing anywhere other than straight over your midline means the shoulder is holding load at a mechanical disadvantage throughout, so the weight needs to drop accordingly.'
  },

  /* ===== ROW / PULL — BARBELL ===== */

  {
    id: 'bent-over-row', name: 'Barbell Bent-Over Row', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bent over row', 'barbell bent over row', 'barbell row', 'bent-over row', 'smith machine bent over row'],
    cues: [
      'Hinge at the hips to roughly 45 degrees, flat back, soft knees',
      'Pull the bar to your lower ribs or upper stomach, elbows driving back',
      'Keep your torso angle steady through the set',
      'Lower with control instead of dropping the bar'
    ],
    mistakeTitle: 'Standing up taller with each rep',
    mistakePoints: ['Torso rises higher as the set gets hard, turning it into a shrug', 'Lower back rounds or hyperextends to heave the bar up'],
    why: 'Why it matters: losing the hinge position shifts load onto the lower back with a heavy bar in your hands, one of the more common ways this exercise leads to back strain.'
  },
  {
    id: 'pendlay-row', name: 'Pendlay Row', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pendlay row'],
    cues: [
      'Torso stays parallel to the floor for the whole set',
      'Bar returns to the floor and stops fully between every rep',
      'Explode the bar to your lower chest with a flat back',
      'Reset your brace before each rep'
    ],
    mistakeTitle: 'Torso rising to help pull the bar',
    mistakePoints: ['Standing up out of the parallel position as you pull', 'Rounding the upper back to reach the bar on the floor'],
    why: 'Why it matters: the strict horizontal torso is the whole point, and holding it under load requires a braced flat back. When that slips into rounding, the lower back is loaded in flexion rep after rep.'
  },
  {
    id: 'yates-row', name: 'Yates Row', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['yates row', 'reverse grip bent over row', 'smith machine reverse grip bent over row'],
    cues: [
      'Underhand grip, torso hinged to roughly 60 to 70 degrees',
      'Pull the bar to your lower abdomen, elbows driving back',
      'Keep the torso angle fixed, no heaving upright',
      'Wrap your thumbs, an underhand grip on a heavy bar needs security'
    ],
    mistakeTitle: 'Heaving the bar with the torso and biceps',
    mistakePoints: ['Standing up and swinging the bar rather than rowing it', 'Yanking hard with the arms from a straight-arm position'],
    why: 'Why it matters: the underhand grip puts the biceps in a vulnerable position at the bottom, and a hard yank from full extension is a known mechanism for biceps tendon injuries.'
  },
  {
    id: 'meadows-row', name: 'Meadows Row', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['meadows row'],
    cues: [
      'Stand side-on to a landmine bar, hinge with a flat back',
      'Brace your free hand on your knee or a support',
      'Pull the bar end up toward your hip, elbow driving back',
      'Resist rotating your torso as you pull'
    ],
    mistakeTitle: 'Rotating the torso to complete the pull',
    mistakePoints: ['Twisting the spine to get extra range at the top', 'Lower back rounding in the hinged position'],
    why: 'Why it matters: this is a single-arm row from a hinge, so the spine is resisting both flexion and rotation. Letting either one go loads the lower back in the position it is least able to handle.'
  },
  {
    id: 'bench-pull', name: 'Bench Pull', riskTag: 'Shoulder', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bench pull', 'dumbbell bench pull'],
    cues: [
      'Lie face down on a raised bench, chest supported throughout',
      'Row the bar up to the underside of the bench',
      'Keep your chest down, do not lift off to help',
      'Control the weight back down to a full stretch'
    ],
    mistakeTitle: 'Lifting the chest off the bench',
    mistakePoints: ['Chest comes off the pad to add body english', 'Jerking the bar up rather than rowing it smoothly'],
    why: 'Why it matters: the chest support is what makes this a back exercise without loading the lower back. Coming off the bench reintroduces exactly the strain the setup is designed to remove.'
  },
  {
    id: 't-bar-row', name: 'Chest-Supported T-Bar Row', riskTag: 'Lower Back', equip: 'machine', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['t bar row', 't-bar row', 'chest supported t bar row', 'chest-supported row'],
    cues: [
      'Chest and torso stay flush against the pad throughout',
      'Pull with your elbows driving back, squeezing your shoulder blades',
      'Let the weight stretch your arms out fully at the bottom',
      'Control the weight down instead of letting it drop'
    ],
    mistakeTitle: 'Pulling your chest off the pad',
    mistakePoints: ['Chest lifts off the support pad to add body english', 'Neck cranes up to help generate momentum'],
    why: 'Why it matters: coming off the pad defeats the point of a chest-supported row and reintroduces the lower-back strain the machine is designed to remove.'
  },
  {
    id: 'barbell-flexion-row', name: 'Barbell Flexion Row', riskTag: 'Lower Back', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell flexion row'],
    cues: [
      'This variation deliberately involves controlled spinal flexion, so keep the load light',
      'Move slowly and deliberately through the range',
      'Never combine deep flexion with heavy weight',
      'Skip it entirely if you have any history of disc problems'
    ],
    mistakeTitle: 'Loading a deliberately rounded spine',
    mistakePoints: ['Using heavy weight while the spine is intentionally flexed', 'Moving fast through the flexion portion'],
    why: 'Why it matters: this movement intentionally loads a rounded spine, which is a genuinely debated training choice. If you do it, light and slow is the only sensible approach, and anyone with back issues should choose a different row.'
  },
  {
    id: 'upright-row', name: 'Upright Row', riskTag: 'Shoulder', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['upright row', 'ez bar upright row', 'cable upright row', 'dumbbell upright row', 'kettlebell upright front row'],
    cues: [
      'Use a grip at least shoulder-width, wider is friendlier on the shoulder',
      'Pull only to chest height, not up to the chin',
      'Lead with the elbows, keeping the bar close to your body',
      'Stop immediately if you feel pinching in the front of the shoulder'
    ],
    mistakeTitle: 'Narrow grip pulled high to the chin',
    mistakePoints: ['Hands close together with the bar pulled all the way to the chin', 'Elbows rising well above shoulder height'],
    why: 'Why it matters: a narrow grip pulled high forces the shoulder into internal rotation and abduction at once, which compresses the tendons under the acromion. This is one of the most commonly flagged impingement-causing exercises, and widening the grip plus stopping at chest height largely fixes it.'
  },
  {
    id: 'barbell-shrug', name: 'Barbell Shrug', riskTag: 'Neck / Trap', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell shrug', 'hex bar shrug', 'machine shrug', 'smith machine shrug', 'cable shrug', 'chest supported dumbbell shrug', 'barbell power shrug'],
    cues: [
      'Stand tall with the bar at arms length, shoulders relaxed down',
      'Shrug straight up toward your ears',
      'Pause briefly at the top, then lower under control',
      'Keep your neck neutral, do not push your head forward'
    ],
    mistakeTitle: 'Rolling the shoulders and craning the neck',
    mistakePoints: ['Rolling the shoulders in circles instead of shrugging straight up', 'Head juts forward or neck strains as the weight gets heavy'],
    why: 'Why it matters: shoulder rolling under heavy load grinds the shoulder joint through a range it is not built to handle loaded, and neck straining under a heavy bar is a quick route to a strained neck or trap.'
  },
  {
    id: 'behind-back-shrug', name: 'Behind the Back Barbell Shrug', riskTag: 'Shoulder', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['behind the back barbell shrug', 'behind the back shrug'],
    cues: [
      'Hold the bar behind your glutes with an overhand grip',
      'Stand tall with your chest open, shoulders back',
      'Shrug straight up without rolling',
      'Keep the weight lighter than a front shrug, the position is less stable'
    ],
    mistakeTitle: 'Shoulders rolling forward under the bar',
    mistakePoints: ['Upper back rounding so the shoulders roll forward', 'Bar dragging hard against the glutes and pulling you off balance'],
    why: 'Why it matters: holding load behind the body already pulls the shoulders back, and rounding forward against that puts the joint in a compromised position under load.'
  },
  {
    id: 'barbell-pullover', name: 'Barbell Pullover', riskTag: 'Shoulder', equip: 'barbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell pullover', 'bent arm barbell pullover', 'machine pullover'],
    cues: [
      'Lie on a bench, bar held over your chest with a slight elbow bend',
      'Lower the bar back over your head only as far as your shoulders allow',
      'Keep your ribs down, do not let your lower back arch off the bench',
      'Pull back over your chest with control'
    ],
    mistakeTitle: 'Going too deep overhead with an arched back',
    mistakePoints: ['Lowering far behind the head into an end-range shoulder stretch', 'Lower back arching off the bench to gain extra range'],
    why: 'Why it matters: this places the shoulder in deep flexion under load, which is a vulnerable position for the joint and the biceps tendon. Range should be limited by your shoulders, not by how far you can arch your back.'
  },

  /* ===== CURL — BARBELL ===== */

  {
    id: 'barbell-curl', name: 'Barbell Curl', riskTag: 'Lower Back / Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell curl', 'standing barbell curl', 'strict curl'],
    cues: [
      'Grip just outside your hips, elbows pinned to your sides',
      'Curl with control, no jerking or swinging',
      'Full range of motion, extend without locking hard at the bottom',
      'Squeeze at the top without leaning back'
    ],
    mistakeTitle: 'Swinging with the hips and back',
    mistakePoints: ['Hips and torso jerk to launch the bar up', 'Leaning back at the top of the rep to help the curl'],
    why: 'Why it matters: swinging shifts load off the biceps and onto your lower back with momentum it was not braced for, a common source of lower back strain on an exercise that should be low-risk.'
  },
  {
    id: 'cheat-curl', name: 'Cheat Curl', riskTag: 'Lower Back', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cheat curl'],
    cues: [
      'Use a controlled hip drive to start the rep, not a violent heave',
      'Brace your core hard before every rep',
      'Control the lowering, that is where the value is',
      'Keep the cheat minimal, this is a strict curl with a small assist'
    ],
    mistakeTitle: 'Turning it into a full-body heave',
    mistakePoints: ['Whipping the lower back to throw the weight up', 'Dropping the weight instead of controlling the eccentric'],
    why: 'Why it matters: the cheat curl is a legitimate technique when the assist is small and controlled, but heaving heavy weight with the lower back is exactly the movement pattern that causes lumbar strains.'
  },
  {
    id: 'ez-bar-curl', name: 'EZ Bar Curl', riskTag: 'Elbow / Wrist', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['ez bar curl'],
    cues: [
      'Use the angled grips, they let your wrists sit more naturally',
      'Elbows pinned to your sides throughout',
      'Curl with control, no swinging',
      'Extend nearly straight at the bottom without hyperextending'
    ],
    mistakeTitle: 'Bouncing out of full extension',
    mistakePoints: ['Snapping into a locked, hyperextended elbow at the bottom then bouncing up', 'Swinging the torso to move heavier weight'],
    why: 'Why it matters: bouncing out of a fully locked elbow puts a sharp tug on the biceps tendon at its most stretched point, which is a common cause of elbow tendon pain in people who curl often.'
  },
  {
    id: 'reverse-barbell-curl', name: 'Reverse Barbell Curl', riskTag: 'Elbow / Wrist', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse barbell curl', 'reverse ez bar curl', 'reverse curl'],
    cues: [
      'Overhand grip, elbows pinned to your sides',
      'Keep your wrists straight and firm, not drooping',
      'Curl with control, this will be much lighter than a normal curl',
      'Lower slowly rather than letting the bar drop'
    ],
    mistakeTitle: 'Letting the wrists collapse under load',
    mistakePoints: ['Wrists bending backward as the weight gets heavy', 'Using normal curl weight and swinging to compensate'],
    why: 'Why it matters: the overhand grip puts the wrist extensors under direct load, and letting the wrist collapse repeatedly is a straightforward route to the elbow-side pain often called tennis elbow.'
  },
  {
    id: 'spider-curl', name: 'Spider Curl', riskTag: 'Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['spider curl', 'ez bar spider curl', 'dumbbell spider curl'],
    cues: [
      'Chest against an incline bench, arms hanging straight down',
      'Curl up without letting your elbows drift forward',
      'Squeeze at the top, then lower all the way down',
      'Keep your chest on the pad the whole set'
    ],
    mistakeTitle: 'Snapping into full extension at the bottom',
    mistakePoints: ['Dropping fast into a locked-out arm at the bottom of each rep', 'Chest lifting off the pad to help the curl'],
    why: 'Why it matters: the hanging arm position already puts the biceps at full stretch, so dropping into it quickly under load adds a sharp pull on the tendon right where it is most vulnerable.'
  },
  {
    id: 'barbell-concentration-curl', name: 'Barbell Concentration Curl', riskTag: 'Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell concentration curl', 'concentration curl', 'dumbbell concentration curl', 'bodyweight concentration curl'],
    cues: [
      'Seated, elbow braced against the inside of your thigh',
      'Curl with the upper arm completely still',
      'Full range, squeezing at the top',
      'Lower slowly rather than letting it drop'
    ],
    mistakeTitle: 'Using the leg to push the arm up',
    mistakePoints: ['Pushing with the thigh to help drive the curl', 'Yanking out of the bottom stretch position'],
    why: 'Why it matters: this is an isolation exercise where the whole point is that only the elbow moves. Adding a leg push means more load than the biceps can handle, taken up by the elbow joint and tendon.'
  },
  {
    id: 'barbell-front-raise', name: 'Barbell Front Raise', riskTag: 'Shoulder / Lower Back', equip: 'barbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell front raise'],
    cues: [
      'Hold the bar at thigh level with a shoulder-width overhand grip',
      'Raise to roughly shoulder height, no higher',
      'Keep a slight elbow bend, do not lock out rigid',
      'Control the descent, no swinging the bar back down'
    ],
    mistakeTitle: 'Swinging the bar up past shoulder height',
    mistakePoints: ['Using hip drive to launch the bar upward', 'Raising well above shoulder height under momentum'],
    why: 'Why it matters: a barbell held at arms length is a long lever, so swinging it puts a surprising amount of strain on the lower back, and lifting past shoulder height moves the shoulder toward an impingement-prone position.'
  },
  {
    id: 'lying-tricep-extension', name: 'Lying Tricep Extension', riskTag: 'Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['lying tricep extension', 'skull crusher', 'skullcrusher', 'ez bar lying tricep extension', 'lying dumbbell tricep extension'],
    cues: [
      'Lie on a bench with the bar over your chest, elbows pointing up',
      'Lower toward your forehead or just behind it by bending only the elbows',
      'Upper arms stay still, elbows should not drift or flare',
      'Extend back up with control, no violent lockout'
    ],
    mistakeTitle: 'Elbows flaring out or drifting back',
    mistakePoints: ['Elbows flare outward or drift over your face as you lower', 'Using too much weight and losing control near your head'],
    why: 'Why it matters: flared or drifting elbows put uneven stress on the elbow joint, and this is an exercise where losing control of a bar near your face carries obvious extra risk. Use an EZ bar and a spotter when going heavy.'
  },
  {
    id: 'barbell-calf-raise', name: 'Barbell Calf Raise', riskTag: 'Achilles', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['barbell calf raise', 'standing calf raise', 'calf raise', 'bodyweight calf raise', 'machine calf raise', 'smith machine calf raise', 'dumbbell calf raise', 'donkey calf raise', 'elevated hex bar calf raise', 'hack squat calf raise', 'sled press calf raise', 'machine calf press'],
    cues: [
      'Balls of your feet on a platform edge, full range from a deep stretch to a full raise',
      'Knees stay soft, not locked',
      'Rise up under control, pause briefly at the top',
      'Lower slowly rather than dropping into the stretch'
    ],
    mistakeTitle: 'Bouncing through a short range',
    mistakePoints: ['Fast, bouncy reps through a small range of motion', 'Dropping hard into the bottom stretch under heavy load'],
    why: 'Why it matters: bouncing turns the calf raise into a ballistic tendon-loading movement rather than a controlled muscle contraction, which is a common way people irritate the Achilles.'
  },
  {
    id: 'seated-calf-raise', name: 'Seated Calf Raise', riskTag: 'Achilles', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['seated calf raise', 'single leg seated calf raise'],
    cues: [
      'Pad across your lower thighs, balls of your feet on the platform',
      'Lower into a controlled stretch, then press up to a full contraction',
      'Pause at the top of each rep',
      'Do not bounce out of the bottom position'
    ],
    mistakeTitle: 'Bouncing out of the stretched position',
    mistakePoints: ['Using the stretch reflex to bounce rep after rep', 'Partial reps at the top with no real stretch'],
    why: 'Why it matters: repeatedly bouncing a loaded Achilles out of full stretch is exactly the kind of repetitive tendon loading that leads to Achilles irritation over time.'
  },
  {
    id: 'tibialis-raise', name: 'Tibialis Raise', riskTag: 'Shin', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['tibialis raise'],
    cues: [
      'Stand with your back against a wall, heels a foot or so out',
      'Lift your toes toward your shins as far as you can',
      'Lower slowly rather than dropping the feet',
      'Build volume gradually, these get sore quickly'
    ],
    mistakeTitle: 'Doing far too much volume too soon',
    mistakePoints: ['Jumping straight into high reps and heavy sets', 'Dropping the feet instead of lowering under control'],
    why: 'Why it matters: the tibialis is rarely trained directly, so it fatigues and gets sore fast. Ramping volume too quickly is the main way people end up with shin discomfort from an exercise meant to prevent it.'
  },
  {
    id: 'wrist-curl', name: 'Wrist Curl', riskTag: 'Wrist', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['wrist curl', 'dumbbell wrist curl', 'cable wrist curl', 'one arm cable wrist curl'],
    cues: [
      'Forearms resting on a bench or your thighs, wrists just off the edge',
      'Let the weight roll down to your fingers, then curl it back up',
      'Move only at the wrist, forearms stay planted',
      'Keep the weight light and the reps smooth'
    ],
    mistakeTitle: 'Going too heavy on a small joint',
    mistakePoints: ['Loading heavy enough that the forearms lift off the bench', 'Jerking the weight up rather than curling smoothly'],
    why: 'Why it matters: the wrist is a small joint with small muscles around it, so heavy jerky loading here produces strain rather than adaptation. Light and controlled is genuinely the productive way to train it.'
  },
  {
    id: 'reverse-wrist-curl', name: 'Reverse Wrist Curl', riskTag: 'Wrist / Elbow', equip: 'barbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse wrist curl', 'dumbbell reverse wrist curl', 'cable reverse wrist curl'],
    cues: [
      'Forearms supported, palms facing down, wrists just off the edge',
      'Lift the back of your hand toward your forearm',
      'Move slowly, this is a small range with light weight',
      'Lower fully but without letting the wrist flop'
    ],
    mistakeTitle: 'Overloading the wrist extensors',
    mistakePoints: ['Using weight heavy enough to force the elbow to help', 'Fast reps with no control at the bottom'],
    why: 'Why it matters: the wrist extensors are directly involved in tennis elbow, so overloading them with heavy fast reps can create the exact pain this exercise is often prescribed to prevent.'
  },
  {
    id: 'wrist-roller', name: 'Wrist Roller', riskTag: 'Wrist', equip: 'other', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['wrist roller'],
    cues: [
      'Hold the roller at chest height with arms extended forward',
      'Roll the weight up steadily using only your wrists',
      'Lower it back down under control rather than letting it unwind',
      'Start with very light weight, this burns quickly'
    ],
    mistakeTitle: 'Letting the weight unwind freely on the way down',
    mistakePoints: ['Allowing the rope to spin down uncontrolled', 'Shoulders creeping up and taking over from the wrists'],
    why: 'Why it matters: the controlled lowering is most of the benefit here, and letting it unwind fast wastes it while putting a sudden yank on the wrists at the end.'
  },
  {
    id: 'hand-gripper', name: 'Hand Grippers', riskTag: 'Hand / Wrist', equip: 'other', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hand grippers', 'hand gripper'],
    cues: [
      'Set the gripper deep in your palm, not just in your fingers',
      'Close it fully and briefly hold',
      'Open under control rather than letting it snap',
      'Build up gripper strength gradually rather than maxing every session'
    ],
    mistakeTitle: 'Forcing a gripper that is far too heavy',
    mistakePoints: ['Straining on a gripper you cannot close with good hand position', 'Letting it snap open at the end of each rep'],
    why: 'Why it matters: grinding on a too-heavy gripper puts strain through the small tendons of the fingers and thumb, and those are slow to recover once irritated.'
  },
  {
    id: 'farmers-walk', name: "Farmer's Walk", riskTag: 'Lower Back / Grip', equip: 'dumbbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ["farmer's walk", 'farmers walk', 'farmer walk'],
    cues: [
      'Stand tall with the weights at your sides, shoulders back',
      'Brace your core and walk with short controlled steps',
      'Keep your ribs down, do not lean to one side',
      'Set the weights down deliberately rather than dropping them'
    ],
    mistakeTitle: 'Letting posture collapse as grip fails',
    mistakePoints: ['Shoulders rounding forward and torso leaning as you tire', 'Dropping the weights from height at the end of the set'],
    why: 'Why it matters: the loaded carry is only spine-friendly while you stay upright. Once the grip goes and posture collapses, you are walking with heavy weight and a rounded spine, and dropping heavy weights near your feet is its own hazard.'
  },
  {
    id: 'sled-push', name: 'Sled Push', riskTag: 'Lower Back', equip: 'machine', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['sled push', 'prowler push'],
    cues: [
      'Grip the handles with arms extended, body in a straight line at an angle',
      'Brace your core, drive with your legs in short powerful steps',
      'Keep your back flat rather than rounding over the sled',
      'Build load gradually, this hits the legs and lungs harder than expected'
    ],
    mistakeTitle: 'Rounding the back to push a too-heavy sled',
    mistakePoints: ['Upper back rounding hard as the sled slows down', 'Head dropping and neck straining under maximum effort'],
    why: 'Why it matters: sled pushes are usually low-risk, but grinding a sled that is too heavy pushes you into a rounded, straining position that puts real load through the lower back.'
  },
  {
    id: 'wall-ball', name: 'Wall Ball', riskTag: 'Shoulder / Lower Back', equip: 'other', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['wall ball'],
    cues: [
      'Hold the ball at chest height, squat to full depth',
      'Drive up and throw the ball to the target in one motion',
      'Catch with soft arms and absorb straight into the next squat',
      'Watch the ball down, do not look away on the catch'
    ],
    mistakeTitle: 'Catching with locked arms or looking away',
    mistakePoints: ['Receiving the ball with straight rigid arms', 'Turning your head away as the ball comes down'],
    why: 'Why it matters: catching a medicine ball on locked arms sends the impact straight into the shoulder joints, and taking your eyes off a falling ball is how people catch one with their face.'
  },
  {
    id: 'battle-ropes', name: 'Battle Ropes', riskTag: 'Shoulder / Lower Back', equip: 'other', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['battle ropes', 'battle rope'],
    cues: [
      'Athletic stance, knees soft, core braced',
      'Move from the shoulders and hips, not by whipping the lower back',
      'Keep your chest up rather than hunching over the ropes',
      'Stop the set when your posture starts to collapse'
    ],
    mistakeTitle: 'Hunching and whipping from the lower back',
    mistakePoints: ['Rounding forward over the ropes as you fatigue', 'Driving the waves with lower back flexion instead of the arms and hips'],
    why: 'Why it matters: this is a conditioning tool, and under high fatigue people default to whipping the spine to keep the ropes moving, which turns a shoulder and conditioning exercise into repeated lumbar flexion.'
  },

  /* ===== PUSH-UP FAMILY ===== */

  {
    id: 'pushup', name: 'Push-Up', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['push up', 'pushup', 'push-up', 'push ups'],
    cues: [
      'Hands roughly shoulder-width, core and glutes braced so your body stays in one line',
      'Lower with control until your chest nears the floor',
      'Elbows track back at a moderate angle, not flared to 90 degrees',
      'Push back up without letting your hips sag or pike'
    ],
    mistakeTitle: 'Sagging hips / flared elbows',
    mistakePoints: ['Hips drop toward the floor, putting the lower back in extension under load', 'Elbows flare straight out to the sides'],
    why: 'Why it matters: a sagging lower back under repeated load is a common source of strain, and flared elbows load the shoulder in a vulnerable position.'
  },
  {
    id: 'knee-pushup', name: 'Knee Push-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['knee push ups', 'knee push up', 'knee pushup'],
    cues: [
      'Knees on the floor, straight line from knees to shoulders',
      'Hands under your shoulders, elbows tracking back',
      'Lower with control until your chest nears the floor',
      'Do not let your hips pike up or sag'
    ],
    mistakeTitle: 'Hips piking up to shorten the movement',
    mistakePoints: ['Hips lifted high so you are only dipping your head toward the floor', 'Partial range that never brings the chest close to the ground'],
    why: 'Why it matters: piking the hips makes the exercise easier without building the core control that a full push-up needs, so the progression to full push-ups stalls and the lower back never learns to brace.'
  },
  {
    id: 'incline-pushup', name: 'Incline Push-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['incline push ups', 'incline push up', 'wall push ups', 'wall push up'],
    cues: [
      'Hands on a bench, box or wall, body in a straight line',
      'The higher the surface, the easier the movement',
      'Lower with control, elbows tracking back not flared',
      'Keep your core braced so your hips do not sag'
    ],
    mistakeTitle: 'Letting the hips sag on an easier variation',
    mistakePoints: ['Core relaxing because the movement feels easy', 'Using an unstable surface that can slide out from under you'],
    why: 'Why it matters: this is the standard regression for building to full push-ups, but only if you hold the plank position. Also make sure the surface is fixed, a rolling bench is a genuine fall risk.'
  },
  {
    id: 'decline-pushup', name: 'Decline Push-Up', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['decline push ups', 'decline push up', 'deficit push ups'],
    cues: [
      'Feet elevated on a bench or box, hands on the floor',
      'Body in one straight line, core braced hard',
      'Lower with control, elbows tracking back',
      'Stop the set when your hips start to sag'
    ],
    mistakeTitle: 'Lower back sagging under the harder angle',
    mistakePoints: ['Hips drop as the elevation makes the core work harder', 'Head dropping toward the floor to fake extra depth'],
    why: 'Why it matters: elevating the feet shifts more weight onto your upper body and demands more core control, so the sagging back that is a minor fault in a normal push-up becomes a bigger one here.'
  },
  {
    id: 'diamond-pushup', name: 'Diamond Push-Up', riskTag: 'Wrist / Elbow', equip: 'bodyweight', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['diamond push ups', 'diamond push up', 'close grip push up'],
    cues: [
      'Hands close together under your chest, forming a triangle',
      'Elbows stay tucked close to your ribs',
      'Lower until your chest touches your hands',
      'Keep your wrists as straight as the position allows'
    ],
    mistakeTitle: 'Forcing the hands together with bent wrists',
    mistakePoints: ['Hands so close the wrists are bent hard sideways', 'Elbows flaring out wide, defeating the triceps emphasis'],
    why: 'Why it matters: the narrow hand position puts the wrist at an awkward angle under body weight, which is a common cause of wrist pain. If it hurts, widen the hands slightly or use push-up handles.'
  },
  {
    id: 'wide-pushup', name: 'Wide Grip Push-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['wide grip push ups', 'wide grip push up', 'wide push ups'],
    cues: [
      'Hands wider than shoulder-width but not extreme',
      'Lower under control with elbows at a moderate angle',
      'Stop when your chest nears the floor',
      'Keep the body in one line throughout'
    ],
    mistakeTitle: 'Hands so wide the shoulders take all the load',
    mistakePoints: ['Extremely wide hand placement forcing the elbows to 90 degrees', 'Dropping fast into the bottom stretch position'],
    why: 'Why it matters: a very wide grip puts the shoulder into the same stretched, externally rotated position as a flared-elbow bench press, which is where front-shoulder strain tends to come from.'
  },
  {
    id: 'pike-pushup', name: 'Pike Push-Up', riskTag: 'Shoulder / Neck', equip: 'bodyweight', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pike push ups', 'pike push up', 'knee pike push ups', 'decline pike push ups'],
    cues: [
      'Hips high in an inverted V, hands shoulder-width',
      'Lower the crown of your head toward the floor between your hands',
      'Elbows track back at roughly 45 degrees, not flared wide',
      'Push back up without letting your neck take the load'
    ],
    mistakeTitle: 'Resting body weight on the head',
    mistakePoints: ['Touching down hard so the head bears weight at the bottom', 'Elbows flaring wide, stressing the shoulder'],
    why: 'Why it matters: this is a vertical press, so any weight resting on your head is going straight through your cervical spine. Touch lightly or stop just short of the floor.'
  },
  {
    id: 'handstand-pushup', name: 'Handstand Push-Up', riskTag: 'Neck / Shoulder', equip: 'bodyweight', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['handstand push ups', 'handstand push up', 'hspu'],
    cues: [
      'Kick up against a wall with hands slightly wider than shoulders',
      'Brace your core so your back does not over-arch',
      'Lower until your head lightly touches, never resting weight on it',
      'Have a plan for bailing before you attempt one'
    ],
    mistakeTitle: 'Loading the head and neck at the bottom',
    mistakePoints: ['Resting or pressing off the head at the bottom of each rep', 'Attempting them before you can hold a stable wall handstand'],
    why: 'Why it matters: putting your body weight through your head and neck upside down is a serious injury risk. Build to a solid handstand hold and strong pike push-ups first, and never let the head take load.'
  },
  {
    id: 'archer-pushup', name: 'Archer Push-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['archer push ups', 'archer push up'],
    cues: [
      'Hands wide, lower toward one hand while the other arm straightens',
      'Keep the straight arm soft, not locked rigid',
      'Body stays in one line, no twisting toward the working side',
      'Alternate sides evenly'
    ],
    mistakeTitle: 'Locking out the straight arm under load',
    mistakePoints: ['Extending arm locked completely straight and bearing weight', 'Torso rotating instead of staying square to the floor'],
    why: 'Why it matters: a locked straight arm taking side-load puts strain through the elbow and shoulder at end range, and twisting the torso shifts the work off the chest and into the spine.'
  },
  {
    id: 'one-arm-pushup', name: 'One Arm Push-Up', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['one arm push ups', 'one arm push up', 'single arm push up'],
    cues: [
      'Feet wide for a stable base, working hand under your chest',
      'Resist rotating, keep your shoulders square to the floor',
      'Lower under control, do not drop into the bottom',
      'Build up through archer push-ups first'
    ],
    mistakeTitle: 'Twisting the torso to complete the rep',
    mistakePoints: ['Rotating the shoulders and hips to leverage the weight up', 'Attempting them before having the strength for controlled reps'],
    why: 'Why it matters: this puts most of your body weight through one shoulder while your spine resists rotation. Twisting to make the rep means the lower back absorbs a twisting load it is poorly built to handle.'
  },
  {
    id: 'clap-pushup', name: 'Clap Push-Up', riskTag: 'Wrist / Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['clap push ups', 'clap push up', 'plyometric push up'],
    cues: [
      'Explode up hard enough to get real air, not just a fast rep',
      'Land with soft elbows and absorb the impact',
      'Keep your core tight so your hips do not slam down',
      'Stop the set as soon as landings stop being controlled'
    ],
    mistakeTitle: 'Landing on stiff arms',
    mistakePoints: ['Landing with locked elbows so the joints absorb the impact', 'Hips slamming down out of the plank line on landing'],
    why: 'Why it matters: landing a plyometric push-up on straight arms sends the impact directly into your wrists, elbows and shoulders. The elbows need to bend and absorb, exactly like landing a jump.'
  },
  {
    id: 'knuckle-pushup', name: 'Knuckle Push-Up', riskTag: 'Wrist / Hand', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['knuckle push ups', 'knuckle push up'],
    cues: [
      'Weight on the two large knuckles of the index and middle fingers',
      'Wrist stacked straight over the forearm, not bent',
      'Use a mat or padded surface, not bare concrete',
      'Lower with control, no bouncing on the knuckles'
    ],
    mistakeTitle: 'Loading the small knuckles with a bent wrist',
    mistakePoints: ['Weight resting on the ring and little finger knuckles', 'Wrist buckling sideways under load'],
    why: 'Why it matters: the small outer knuckles and their joints are not built to take body weight, and a wrist bending sideways under load is how people end up with lasting wrist pain from this variation.'
  },
  {
    id: 'planche-pushup', name: 'Planche Push-Up', riskTag: 'Shoulder / Wrist', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['planche push ups', 'planche push up', 'pseudo planche push ups', 'pseudo planche push up'],
    cues: [
      'Hands turned out, lean your shoulders well in front of your hands',
      'Body stays in one straight line with the hips level',
      'Build wrist and shoulder tolerance gradually over months',
      'Regress to pseudo-planche leans if you feel any joint pain'
    ],
    mistakeTitle: 'Rushing the progression',
    mistakePoints: ['Attempting full planche push-ups without months of preparation', 'Wrists collapsing under the extreme forward lean'],
    why: 'Why it matters: this places enormous demand on the shoulder joint and the wrists in extension. It is a skill built over a long time, and rushing it is a reliable way to develop wrist and shoulder tendon problems.'
  },
  {
    id: 'plank-pushup', name: 'Plank Push-Up', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['plank push ups', 'plank push up', 'up down plank'],
    cues: [
      'Start in a forearm plank, press up to a high plank one arm at a time',
      'Keep your hips as still as possible, resist the rocking',
      'Core braced hard throughout',
      'Alternate the leading arm between reps'
    ],
    mistakeTitle: 'Hips swinging side to side',
    mistakePoints: ['Hips rotating hard as each arm moves', 'Lower back sagging during the transitions'],
    why: 'Why it matters: the anti-rotation element is the whole point. Letting the hips swing means the spine is being twisted repeatedly instead of the core learning to resist it.'
  },
  {
    id: 'x-pushup', name: 'X Push-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['x push ups', 'x push up'],
    cues: [
      'Hands and feet spread wide into an X shape',
      'Body stays in one line, core braced',
      'Lower under control, elbows at a moderate angle',
      'Keep the range conservative, the wide base limits shoulder-friendly depth'
    ],
    mistakeTitle: 'Dropping deep on a very wide base',
    mistakePoints: ['Lowering all the way down with hands spread very wide', 'Hips sagging because the wide stance makes bracing harder'],
    why: 'Why it matters: the wide arm position already puts the shoulder near end range at the top, so a deep descent adds stretch to a joint that is already loaded at a poor angle.'
  },
  {
    id: 'russian-pushup', name: 'Russian Push-Up', riskTag: 'Elbow / Shoulder', equip: 'bodyweight', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['russian push ups', 'russian push up'],
    cues: [
      'Lower into a push-up, then rock forward onto your forearms',
      'Press back from the forearms to the hands in one motion',
      'Keep your core braced so your hips do not sag during the transition',
      'Use a padded surface, the elbows take impact'
    ],
    mistakeTitle: 'Dropping onto the elbows',
    mistakePoints: ['Crashing down onto the forearms rather than lowering', 'Hips sagging through the forearm portion'],
    why: 'Why it matters: dropping your body weight onto your elbows on a hard floor puts direct impact through the joint, and this movement already asks a lot of the elbow at end range.'
  },
  {
    id: 'tiger-bend-pushup', name: 'Tiger Bend Push-Up', riskTag: 'Elbow', equip: 'bodyweight', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['tiger bend push ups', 'tiger bend push up'],
    cues: [
      'From a handstand or pike, lower onto the forearms with control',
      'Press back up to straight arms without kipping',
      'Only attempt after solid handstand push-ups',
      'Use padding under the forearms'
    ],
    mistakeTitle: 'Attempting it without the prerequisite strength',
    mistakePoints: ['Collapsing onto the forearms instead of lowering under control', 'Trying it before handstand push-ups are comfortable'],
    why: 'Why it matters: this is an advanced skill that loads the elbow joint at a deeply bent angle while inverted. Without the underlying strength, the descent becomes a fall onto the elbows.'
  },
  {
    id: 'reverse-grip-pushup', name: 'Reverse Grip Push-Up', riskTag: 'Wrist / Elbow', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse grip push ups', 'reverse grip push up'],
    cues: [
      'Hands turned so fingers point back toward your feet',
      'Keep the range shallow at first, this is hard on the wrists',
      'Elbows stay tucked close to your body',
      'Stop immediately if you feel wrist or elbow pain'
    ],
    mistakeTitle: 'Forcing depth with reversed wrists',
    mistakePoints: ['Going to full depth before the wrists have adapted', 'Ignoring wrist pain because the chest feels worked'],
    why: 'Why it matters: reversing the hands puts the wrist in an unusual loaded position most people have never trained. Wrist pain here is a signal to back off, not something to push through.'
  },
  {
    id: 'cobra-pushup', name: 'Knee Cobra Push-Up', riskTag: 'Lower Back', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['knee cobra push ups', 'knee cobra push up', 'hindu push up'],
    cues: [
      'Sweep down and forward, then press your chest up into extension',
      'Keep the back extension gentle rather than cranking it',
      'Move smoothly, this is a flowing movement not a strength grind',
      'Reduce the arch if you feel any pinching in the lower back'
    ],
    mistakeTitle: 'Cranking hard into lumbar extension',
    mistakePoints: ['Forcing a deep backbend at the top of every rep', 'Rushing the movement so the spine snaps into extension'],
    why: 'Why it matters: the value here is in the smooth flowing range, not in maximum arch. Repeatedly snapping into deep lumbar extension can irritate the joints at the back of the spine.'
  },

  /* ===== PULL-UP FAMILY ===== */

  {
    id: 'pullup', name: 'Pull-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pull up', 'pullup', 'pull-up', 'pull ups', 'high pull ups', 'trx pull up', 'clap pull ups'],
    cues: [
      'Start from a full hang, shoulder blades set before pulling',
      'Pull with your back, driving elbows down and back',
      'Chin clears the bar with control',
      'Lower back down under control instead of dropping'
    ],
    mistakeTitle: 'Kipping / swinging to get up',
    mistakePoints: ['Using a big leg kick and body swing to launch upward', 'Only pulling through part of the range at the bottom'],
    why: 'Why it matters: swinging shifts strain onto the shoulder joint at end ranges it is not braced for, a common way people irritate the rotator cuff on this exercise.'
  },
  {
    id: 'chinup', name: 'Chin-Up', riskTag: 'Neck / Elbow', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['chin up', 'chinup', 'chin-up', 'chin ups'],
    cues: [
      'Underhand grip, roughly shoulder-width, start from a full hang',
      'Pull your chest toward the bar, driving elbows down',
      'Chin clears the bar without craning your neck forward',
      'Lower under control instead of dropping from the top'
    ],
    mistakeTitle: 'Craning the neck to reach the bar',
    mistakePoints: ['Jutting the chin and neck forward instead of pulling through the back', 'Dropping fast into a fully locked-out hang'],
    why: 'Why it matters: craning the neck puts strain on the cervical spine instead of the back doing the work, and dropping into a dead-straight arm on an underhand grip is a known way to strain the biceps tendon.'
  },
  {
    id: 'wide-grip-pullup', name: 'Wide Grip Pull-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['wide grip pull ups', 'wide grip pull up'],
    cues: [
      'Grip wider than shoulder-width but not extreme',
      'Set your shoulder blades before you start pulling',
      'Pull your chest toward the bar, elbows driving down',
      'Control the descent rather than dropping into the hang'
    ],
    mistakeTitle: 'Gripping extremely wide and dropping into the hang',
    mistakePoints: ['Hands so wide the shoulders are pulled into an extreme stretched position', 'Free-falling into a dead hang at the bottom of each rep'],
    why: 'Why it matters: a very wide grip puts the shoulder near its end range at the bottom under full body weight, and dropping into that position is when the joint is least protected.'
  },
  {
    id: 'close-grip-pullup', name: 'Close Grip Pull-Up', riskTag: 'Elbow / Shoulder', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['close grip pull ups', 'close grip pull up', 'neutral grip pull ups', 'neutral grip pull up'],
    cues: [
      'Hands close together, neutral or underhand grip',
      'Set the shoulder blades, then pull your chest to the bar',
      'Keep the body still rather than swinging',
      'Lower with control to a full but not slack hang'
    ],
    mistakeTitle: 'Snapping into the bottom of the hang',
    mistakePoints: ['Dropping fast so the elbows lock out hard at the bottom', 'Kipping to squeeze out extra reps'],
    why: 'Why it matters: a close grip puts more demand on the elbow, and repeatedly snapping into a locked hang under body weight is a common route to elbow tendon pain in people who train pull-ups often.'
  },
  {
    id: 'assisted-pullup', name: 'Assisted Pull-Up', riskTag: 'Shoulder', equip: 'machine', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['assisted pull ups', 'assisted pull up', 'band assisted pull ups', 'assisted chin ups', 'assisted chin up'],
    cues: [
      'Set the assistance so you can complete controlled reps, not barely scrape them',
      'Same technique as an unassisted pull-up, shoulder blades set first',
      'Control the descent, do not let the machine or band throw you up',
      'Reduce assistance gradually over weeks'
    ],
    mistakeTitle: 'Letting the band snap you through the range',
    mistakePoints: ['Bouncing off the band at the bottom rather than controlling the hang', 'Using so much assistance that no real strength is being built'],
    why: 'Why it matters: a band gives most of its help at the bottom, which is exactly where the shoulder is most vulnerable. Bouncing off it means you skip the part of the range you most need to strengthen.'
  },
  {
    id: 'negative-pullup', name: 'Negative Pull-Up', riskTag: 'Shoulder / Elbow', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['negative pull ups', 'negative pull up', 'eccentric pull up'],
    cues: [
      'Jump or step up to the top position with your chin over the bar',
      'Lower as slowly as you can control, aiming for three to five seconds',
      'Keep your shoulder blades engaged rather than going slack at the bottom',
      'Step off rather than dropping from a dead hang'
    ],
    mistakeTitle: 'Going slack at the bottom of the lower',
    mistakePoints: ['Letting the shoulders shrug up and the arms go completely slack', 'Losing control halfway and dropping the rest of the way'],
    why: 'Why it matters: hanging fully slack at the end of a slow negative puts the shoulder joint and elbow tendons under body weight with no muscular support, which is where the strain happens.'
  },
  {
    id: 'scapular-pullup', name: 'Scapular Pull-Up', riskTag: 'Shoulder', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['scapular pull ups', 'scapular pull up', 'scap pull up'],
    cues: [
      'Hang from the bar with straight arms',
      'Pull your shoulder blades down and back without bending your elbows',
      'Hold briefly at the top of the shrug, then lower with control',
      'Keep the movement small, this is shoulder blade motion only'
    ],
    mistakeTitle: 'Bending the elbows and turning it into a pull-up',
    mistakePoints: ['Arms bending so the movement becomes a partial pull-up', 'Dropping back into a slack hang between reps'],
    why: 'Why it matters: this exercise exists to teach shoulder blade control before loading the shoulder in a full pull-up, so bending the arms skips exactly the thing you are training.'
  },
  {
    id: 'archer-pullup', name: 'Archer Pull-Up', riskTag: 'Shoulder / Elbow', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['archer pull ups', 'archer pull up'],
    cues: [
      'Wide grip, pull toward one hand while the other arm straightens',
      'Keep a slight bend in the straightening arm, never lock it rigid',
      'Control the descent on both sides',
      'Alternate sides evenly through the set'
    ],
    mistakeTitle: 'Fully locking the extended arm',
    mistakePoints: ['Extended arm locked dead straight under load', 'Swinging across to reach the working side'],
    why: 'Why it matters: a locked straight arm taking sideways load under body weight puts real strain on the elbow and shoulder at end range. A soft bend keeps the muscle in control of the joint.'
  },
  {
    id: 'one-arm-pullup', name: 'One Arm Pull-Up', riskTag: 'Elbow / Shoulder', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['one arm pull ups', 'one arm pull up'],
    cues: [
      'Only attempt after years of consistent pulling strength work',
      'Set the shoulder blade before initiating the pull',
      'Resist the rotation that the single-arm position creates',
      'Build via archer pull-ups and weighted pull-ups first'
    ],
    mistakeTitle: 'Attempting it before the tendons are ready',
    mistakePoints: ['Trying one-arm reps without a long base of weighted pulling', 'Dropping into a one-arm dead hang from the top'],
    why: 'Why it matters: this puts your entire body weight through one elbow and shoulder. Muscles adapt faster than tendons, so people often get strong enough to attempt this before their connective tissue can handle it.'
  },
  {
    id: 'muscle-up', name: 'Muscle Up', riskTag: 'Shoulder / Elbow', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['muscle ups', 'muscle up', 'ring muscle ups', 'assisted muscle ups'],
    cues: [
      'Build to strict chest-to-bar pull-ups and deep dips before attempting',
      'Pull explosively and keep the bar close as you transition over',
      'Control the transition rather than throwing yourself through it',
      'Lower back down under control rather than dropping'
    ],
    mistakeTitle: 'Muscling through the transition with a violent kip',
    mistakePoints: ['Throwing the body through the transition with a hard kip', 'Attempting it without the pull-up and dip strength underneath'],
    why: 'Why it matters: the transition puts the shoulder through a fast, loaded rotation at end range. Kipping through it without the underlying strength is a common cause of shoulder and elbow injuries in calisthenics.'
  },
  {
    id: 'dead-hang', name: 'Dead Hang', riskTag: 'Shoulder', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dead hang'],
    cues: [
      'Hang from the bar with a full grip, thumbs wrapped',
      'Keep some tension in the shoulders rather than hanging completely slack',
      'Breathe steadily and keep the body still',
      'Step down rather than dropping from the bar'
    ],
    mistakeTitle: 'Hanging completely passive for long periods',
    mistakePoints: ['Shoulders shrugged up to the ears with no muscular engagement', 'Long passive hangs before the shoulders have adapted'],
    why: 'Why it matters: a fully passive hang puts your body weight into the shoulder capsule rather than the muscles. Some passive hanging is fine for most people, but build up gradually rather than starting with long holds.'
  },
  {
    id: 'toes-to-bar', name: 'Toes to Bar', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['toes to bar', 'ttb'],
    cues: [
      'Hang with shoulder blades engaged, not slack',
      'Curl your pelvis and bring your toes up to the bar',
      'Control the descent instead of letting your legs drop',
      'Keep the swing controlled rather than wild'
    ],
    mistakeTitle: 'Wild swinging under fatigue',
    mistakePoints: ['Body swinging violently to generate the momentum', 'Legs dropping uncontrolled from the top'],
    why: 'Why it matters: under high reps and fatigue this becomes a whole-body swing, which loads the shoulder at end range and snaps the lower back through repeated flexion and extension.'
  },
  {
    id: 'inverted-row', name: 'Inverted Row', riskTag: 'Lower Back', equip: 'bodyweight', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['inverted row', 'table inverted row', 'trx row', 'bodyweight row'],
    cues: [
      'Body in a straight line from heels to shoulders',
      'Pull your chest to the bar, elbows driving back',
      'Squeeze your shoulder blades at the top',
      'Lower with control to straight arms'
    ],
    mistakeTitle: 'Hips sagging out of the plank line',
    mistakePoints: ['Hips dropping toward the floor as you tire', 'Pulling with the arms only while the body stays limp'],
    why: 'Why it matters: this is a moving plank as much as a row. Letting the hips sag puts the lower back in extension under load and takes the core out of the movement entirely.'
  },
  {
    id: 'front-lever', name: 'Front Lever', riskTag: 'Shoulder / Elbow', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['front lever', 'tuck front lever row'],
    cues: [
      'Work through progressions: tuck, advanced tuck, single leg, then full',
      'Keep your arms straight but not hyperextended',
      'Brace your core and glutes so the body stays in one line',
      'Spend months on each progression rather than rushing'
    ],
    mistakeTitle: 'Skipping progressions and hyperextending the elbows',
    mistakePoints: ['Attempting a full lever before the tuck version is solid', 'Elbows locking into hyperextension to hold the position'],
    why: 'Why it matters: static holds with straight arms put enormous sustained load on the elbow tendons and shoulder. This is a slow skill to build, and rushing it produces elbow tendon problems that take months to settle.'
  },
  {
    id: 'back-lever', name: 'Back Lever', riskTag: 'Shoulder / Elbow', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['back lever'],
    cues: [
      'Work through tuck and single-leg progressions first',
      'Ease into the position slowly rather than dropping into it',
      'Keep a micro-bend in the elbows',
      'Stop the hold the moment your shoulders feel strained'
    ],
    mistakeTitle: 'Dropping into the full position too fast',
    mistakePoints: ['Lowering quickly into the full lever, wrenching the shoulders', 'Elbows locked rigid throughout the hold'],
    why: 'Why it matters: the back lever puts the shoulder into extension with the body weight pulling it further, which is a genuinely vulnerable position for the biceps tendon and shoulder joint. Lowering into it slowly is essential.'
  },
  {
    id: 'planche', name: 'Planche', riskTag: 'Shoulder / Wrist', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['planche'],
    cues: [
      'Build wrist tolerance with leans and stretches before loading',
      'Progress through tuck, advanced tuck, and straddle over months',
      'Protract your shoulder blades and lean well forward',
      'Use parallettes if wrist extension is uncomfortable'
    ],
    mistakeTitle: 'Overloading wrists and shoulders too early',
    mistakePoints: ['Holding advanced positions before the tendons have adapted', 'Ignoring early wrist pain and continuing to train'],
    why: 'Why it matters: this is one of the most demanding static holds in calisthenics, and the wrists and shoulder tendons are the limiting factor for most people. Wrist pain is an early warning, not something to train through.'
  },
  {
    id: 'l-sit', name: 'L Sit', riskTag: 'Shoulder / Hip', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['l sit', 'l-sit', 'v sit'],
    cues: [
      'Press down hard through your hands, shoulders pushed away from your ears',
      'Legs straight out in front, toes pointed',
      'Start with tuck or single-leg versions',
      'Breathe rather than holding your breath through the hold'
    ],
    mistakeTitle: 'Shoulders shrugging up to the ears',
    mistakePoints: ['Letting the shoulders ride up instead of actively depressing them', 'Rounding the lower back hard to get the legs up'],
    why: 'Why it matters: shrugged shoulders under load put the joint in a compressed position, and heavy lumbar rounding to compensate for tight hamstrings loads the lower back rather than the abs.'
  },
  {
    id: 'dragon-flag', name: 'Dragon Flag', riskTag: 'Lower Back / Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dragon flag'],
    cues: [
      'Grip behind your head firmly, weight resting on your upper back not your neck',
      'Keep your body rigid in one line as you lower',
      'Start with bent-knee or tuck versions',
      'Never let your lower back arch off as you descend'
    ],
    mistakeTitle: 'Lower back arching away on the descent',
    mistakePoints: ['Back arching so the lumbar spine takes the load instead of the abs', 'Weight resting on the neck rather than the shoulders and upper back'],
    why: 'Why it matters: this is an extremely demanding core exercise, and the moment the lower back arches, the load transfers off the abs and onto the lumbar spine at a long lever. Resting weight on your neck is its own risk.'
  },

  /* ===== DIP FAMILY ===== */

  {
    id: 'dips', name: 'Dips', riskTag: 'Shoulder', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dips', 'dip', 'tricep dips', 'chest dips'],
    cues: [
      'Shoulders pulled down and back before lowering, avoid shrugging up',
      'Lean slightly forward for chest emphasis, stay more upright for triceps',
      'Lower until your shoulders are roughly level with your elbows, not much deeper',
      'Push back up with control, no swinging'
    ],
    mistakeTitle: 'Descending too deep / letting shoulders roll forward',
    mistakePoints: ['Dropping well below elbow-level depth', 'Shoulders roll forward and down at the bottom'],
    why: 'Why it matters: going too deep puts the front of the shoulder in a stretched, vulnerable position under body weight, a common way dips lead to shoulder strain.'
  },
  {
    id: 'bench-dips', name: 'Bench Dips', riskTag: 'Shoulder', equip: 'bodyweight', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bench dips', 'bench dip', 'seated dip machine'],
    cues: [
      'Hands on the bench edge behind you, fingers pointing forward',
      'Keep your body close to the bench as you lower',
      'Stop when your upper arms reach roughly parallel to the floor',
      'Do not shrug your shoulders up toward your ears'
    ],
    mistakeTitle: 'Dropping too low with the hands fixed behind you',
    mistakePoints: ['Lowering far past parallel so the shoulders roll forward hard', 'Body drifting away from the bench, increasing the shoulder stretch'],
    why: 'Why it matters: with your hands pinned behind your body, depth forces the shoulder into internal rotation and extension at the same time. This is one of the more common shoulder-irritating exercises in the gym, so keep the range modest.'
  },
  {
    id: 'ring-dips', name: 'Ring Dips', riskTag: 'Shoulder / Elbow', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['ring dips', 'ring dip'],
    cues: [
      'Build stability with ring support holds before adding reps',
      'Keep the rings close to your body, turned out at the top',
      'Lower only as deep as you can control',
      'Stop the set when the rings start shaking badly'
    ],
    mistakeTitle: 'Attempting reps before the support hold is stable',
    mistakePoints: ['Rings wobbling wildly throughout the set', 'Descending deep on an unstable platform'],
    why: 'Why it matters: rings add instability on top of an already shoulder-demanding movement. Without a solid support hold first, the shoulder is stabilising a moving load at end range, which is where injuries happen.'
  },
  {
    id: 'russian-dips', name: 'Russian Dips', riskTag: 'Elbow / Shoulder', equip: 'bodyweight', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['russian dips', 'russian dip'],
    cues: [
      'From a dip, lower onto your forearms with control',
      'Press back up to straight arms in one motion',
      'Keep your core tight so you do not swing',
      'Only attempt with solid regular dip strength first'
    ],
    mistakeTitle: 'Dropping onto the forearms',
    mistakePoints: ['Crashing down onto the bars rather than lowering', 'Swinging the legs to generate momentum out of the bottom'],
    why: 'Why it matters: this loads the elbow at a deeply bent angle under body weight, and dropping into that position rather than lowering into it is exactly how elbow injuries occur on this movement.'
  },

  /* ===== CORE ===== */

  {
    id: 'plank', name: 'Plank', riskTag: 'Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['plank', 'low plank', 'trx plank', 'forearm plank'],
    cues: [
      'Forearms and toes on the ground, body in one straight line',
      'Brace your core and squeeze your glutes',
      'Neck neutral, eyes toward the floor',
      'Breathe steadily instead of holding your breath'
    ],
    mistakeTitle: 'Hips sagging or piking up',
    mistakePoints: ['Hips drop toward the floor, arching the lower back', 'Hips pike up high to make the hold feel easier'],
    why: 'Why it matters: a sagging plank puts sustained compressive stress on the lower back, and piking the hips just avoids working the core instead of protecting it.'
  },
  {
    id: 'high-plank', name: 'High Plank', riskTag: 'Lower Back / Wrist', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['high plank', 'straight arm plank'],
    cues: [
      'Hands directly under your shoulders, arms straight',
      'Body in one line from heels to head',
      'Push the floor away so your upper back does not collapse',
      'Wrists stacked under the shoulders to avoid strain'
    ],
    mistakeTitle: 'Hips sagging and shoulders collapsing',
    mistakePoints: ['Lower back dipping toward the floor', 'Shoulder blades collapsing together between the arms'],
    why: 'Why it matters: a sagging high plank loads the lower back and puts prolonged pressure on wrists that are already in extension. Actively pushing away keeps the load in the muscles rather than the joints.'
  },
  {
    id: 'side-plank', name: 'Side Plank', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['side plank', 'trx side plank'],
    cues: [
      'Elbow directly under your shoulder, feet stacked or staggered',
      'Lift your hips so your body forms a straight line',
      'Do not let your hips drop toward the floor',
      'Keep your neck in line with your spine'
    ],
    mistakeTitle: 'Hips dropping through the hold',
    mistakePoints: ['Hips sagging toward the floor as the set goes on', 'Elbow placed in front of or behind the shoulder'],
    why: 'Why it matters: a dropping hip means the obliques have stopped working and the load shifts into the spine and shoulder. An elbow out of line under body weight also puts the shoulder in an awkward supporting position.'
  },
  {
    id: 'reverse-plank', name: 'Reverse Plank', riskTag: 'Shoulder / Wrist', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse plank'],
    cues: [
      'Hands under your shoulders with fingers pointing toward your feet',
      'Lift your hips so your body forms a straight line',
      'Keep your chest open rather than letting the shoulders roll',
      'Do not crank your head backward'
    ],
    mistakeTitle: 'Letting the head drop back and shoulders roll',
    mistakePoints: ['Head hanging backward through the hold', 'Shoulders rolling forward under the load'],
    why: 'Why it matters: this position already puts the shoulder into extension, and letting it roll forward compresses the joint. Cranking the head back adds sustained strain to the neck for no benefit.'
  },
  {
    id: 'plank-lean', name: 'Plank Lean', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['plank lean'],
    cues: [
      'Start in a forearm plank, then shift your weight forward over your elbows',
      'Keep your body in one rigid line as you lean',
      'Return to the start under control',
      'Stop when your hips start to sag'
    ],
    mistakeTitle: 'Hips sagging as the lean increases',
    mistakePoints: ['Lower back dropping as the lever gets longer', 'Leaning further than the core can hold'],
    why: 'Why it matters: leaning forward makes the plank harder by lengthening the lever, which means the point where your back gives out comes sooner. Leaning past that point simply loads the lumbar spine.'
  },
  {
    id: 'crunch', name: 'Crunch', riskTag: 'Neck / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['crunches', 'crunch', 'double crunches', 'decline crunch', 'side crunch'],
    cues: [
      'Hands lightly behind your head or crossed on your chest',
      'Curl your ribs toward your hips, lifting only the shoulder blades',
      'Keep space between your chin and chest',
      'Lower with control rather than flopping back down'
    ],
    mistakeTitle: 'Yanking on the neck to sit up',
    mistakePoints: ['Pulling the head forward with the hands', 'Chin jammed into the chest through every rep'],
    why: 'Why it matters: hauling on your head puts repeated strain on the cervical spine, and it is the single most common complaint people have from doing crunches. Your hands should support the head, not pull it.'
  },
  {
    id: 'situp', name: 'Sit Up', riskTag: 'Lower Back / Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['sit ups', 'sit up', 'situp', 'decline sit-up', 'inverted decline sit-up', 'frog sit-ups', 'v ups', 'v up'],
    cues: [
      'Knees bent, feet flat or anchored',
      'Curl up segment by segment rather than snapping up rigid',
      'Hands crossed on your chest instead of behind your head',
      'Lower with control rather than dropping back'
    ],
    mistakeTitle: 'Snapping up with a straight back and yanking the neck',
    mistakePoints: ['Hinging up rigid from the hips instead of curling the spine', 'Hands pulling the head forward'],
    why: 'Why it matters: a straight-backed sit-up is driven mainly by the hip flexors, which pull directly on the lumbar spine. Combined with hauling on the neck, that is why sit-ups get blamed for so much back and neck discomfort.'
  },
  {
    id: 'reverse-crunch', name: 'Reverse Crunch', riskTag: 'Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['reverse crunches', 'reverse crunch'],
    cues: [
      'Lie on your back, knees bent, lower back pressed into the floor',
      'Curl your pelvis up toward your ribs',
      'Lower slowly without letting your back arch off the floor',
      'Keep the movement small and controlled'
    ],
    mistakeTitle: 'Swinging the legs and arching the back',
    mistakePoints: ['Using leg momentum to throw the hips up', 'Lower back arching off the floor on the way down'],
    why: 'Why it matters: the point is pelvic curl, not leg swing. When the lower back arches off the floor, the hip flexors are pulling on the lumbar spine instead of the abs doing the work.'
  },
  {
    id: 'bicycle-crunch', name: 'Bicycle Crunch', riskTag: 'Neck / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bicycle crunch', 'bicycle crunches'],
    cues: [
      'Hands lightly behind your head, elbows wide',
      'Rotate through your torso, not by yanking the elbow across',
      'Keep your lower back pressed toward the floor',
      'Move at a controlled pace rather than racing'
    ],
    mistakeTitle: 'Yanking the neck and racing through reps',
    mistakePoints: ['Pulling the head across with the hands to meet the knee', 'Moving so fast the lower back arches off the floor'],
    why: 'Why it matters: the fast twisting motion makes it easy to haul on the neck rep after rep, and losing lower-back contact with the floor puts the lumbar spine into repeated loaded rotation.'
  },
  {
    id: 'russian-twist', name: 'Russian Twist', riskTag: 'Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['russian twist', 'kettlebell russian twist', 'seated rotation'],
    cues: [
      'Sit with knees bent, lean back to a comfortable angle with a flat back',
      'Rotate from your ribcage, keeping your chest up',
      'Move at a controlled speed rather than whipping side to side',
      'Keep the weight light, this is a rotation control exercise'
    ],
    mistakeTitle: 'Whipping the weight while the back is rounded',
    mistakePoints: ['Rounding the lower back and twisting fast under load', 'Moving only the arms while the torso stays still'],
    why: 'Why it matters: loaded rotation on a rounded lumbar spine is one of the least back-friendly combinations there is. Keeping the chest up and slowing the movement down is what makes this exercise reasonable.'
  },
  {
    id: 'hanging-leg-raise', name: 'Hanging Leg Raise', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hanging leg raise', 'hanging knee raise', 'captain\'s chair leg raise', 'captain\'s chair knee raise'],
    cues: [
      'Hang with your shoulder blades set, not fully relaxed',
      'Raise your legs by curling your pelvis up, not just swinging',
      'Control the descent instead of letting your legs drop',
      'Keep the swing minimal throughout the set'
    ],
    mistakeTitle: 'Swinging the legs instead of curling the pelvis',
    mistakePoints: ['Using momentum to swing the legs up instead of a controlled curl', 'Excessive body swing putting strain on the shoulders'],
    why: 'Why it matters: swinging shifts the work off the abs and onto momentum, and a lot of uncontrolled swing under your body weight adds unnecessary stress to the shoulder joints you are hanging from.'
  },
  {
    id: 'lying-leg-raise', name: 'Lying Leg Raise', riskTag: 'Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['lying leg raise', 'lying leg raises', 'leg raise'],
    cues: [
      'Lie flat with your hands under your glutes for support',
      'Press your lower back into the floor before you start',
      'Lower your legs only as far as you can keep the back flat',
      'Raise back up under control'
    ],
    mistakeTitle: 'Lower back arching off the floor',
    mistakePoints: ['Legs lowered so far the lumbar spine peels off the ground', 'Using momentum to swing the legs back up'],
    why: 'Why it matters: once your lower back lifts off the floor, the hip flexors are pulling directly on the lumbar spine with your legs as a long lever. That is the most common cause of back pain from leg raises.'
  },
  {
    id: 'windshield-wipers', name: 'Hanging Windshield Wipers', riskTag: 'Lower Back / Shoulder', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hanging windshield wipers', 'windshield wipers'],
    cues: [
      'Only attempt with solid hanging leg raise strength first',
      'Keep your shoulder blades engaged in the hang',
      'Rotate under control, never letting the legs swing freely',
      'Start with bent knees to shorten the lever'
    ],
    mistakeTitle: 'Letting the legs swing freely under load',
    mistakePoints: ['Legs swinging past your control at the end of each arc', 'Attempting straight-leg versions before bent-knee ones are easy'],
    why: 'Why it matters: this loads the spine in rotation with a long lever while you hang. Loss of control at the end of the arc means the lower back absorbs a fast twisting load, which it handles poorly.'
  },
  {
    id: 'ab-rollout', name: 'Ab Wheel Rollout', riskTag: 'Lower Back', equip: 'other', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['ab wheel rollout', 'ab rollout', 'wheel rollout', 'trx ab rollout'],
    cues: [
      'Start kneeling, core braced hard before you move',
      'Roll out only as far as you can keep your lower back from sagging',
      'Keep a straight line from your shoulders to your knees',
      'Pull back in using your abs, not your hip flexors'
    ],
    mistakeTitle: 'Letting the lower back sag on the rollout',
    mistakePoints: ['Lower back arches and sags as you extend further out', 'Rolling out further than your core strength currently supports'],
    why: 'Why it matters: a sagging lower back under this kind of extended load is one of the more common ways people strain their spine on this exercise. Range should be earned, not forced.'
  },
  {
    id: 'flutter-kicks', name: 'Flutter Kicks', riskTag: 'Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['flutter kicks', 'scissor kicks', 'ski abs'],
    cues: [
      'Lie flat, hands under your glutes, lower back pressed down',
      'Keep the kicks small and controlled',
      'Raise your legs higher if your back starts to arch',
      'Stop the set when you can no longer keep the back flat'
    ],
    mistakeTitle: 'Legs too low so the back arches',
    mistakePoints: ['Kicking with the legs near the floor, pulling the back into an arch', 'Continuing past the point where the lower back lifts'],
    why: 'Why it matters: the lower your legs, the harder your hip flexors pull on the lumbar spine. Raising the leg angle is a simple fix that keeps the work in the abs where it belongs.'
  },
  {
    id: 'heel-touch', name: 'Heel Touch', riskTag: 'Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['heel touch', 'heel touches', 'heel press'],
    cues: [
      'Lie with knees bent, shoulder blades slightly off the floor',
      'Reach side to side to touch your heels',
      'Keep your neck relaxed and in line with your spine',
      'Move at a controlled pace'
    ],
    mistakeTitle: 'Straining the neck to stay lifted',
    mistakePoints: ['Chin jammed into the chest to hold the crunch position', 'Racing side to side with no control'],
    why: 'Why it matters: holding a partial crunch for many reps tends to fatigue the neck before the abs, and the strained forward-head position is what leaves people sore in the neck the next day.'
  },
  {
    id: 'superman', name: 'Superman', riskTag: 'Lower Back / Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['superman', 'superman hold'],
    cues: [
      'Lie face down, arms extended in front',
      'Lift your arms, chest and legs a modest distance off the floor',
      'Keep your neck neutral, eyes down at the floor',
      'Hold briefly and lower with control'
    ],
    mistakeTitle: 'Cranking into maximum extension with the head up',
    mistakePoints: ['Lifting as high as possible into a hard lumbar arch', 'Head craned up so the neck is in full extension'],
    why: 'Why it matters: forcing maximum spinal extension repeatedly compresses the joints at the back of the spine. A modest lift with a neutral neck gets the same strengthening effect without the irritation.'
  },
  {
    id: 'bird-dog', name: 'Bird Dog', riskTag: 'Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bird dog', 'bird dog hold'],
    cues: [
      'On all fours, hands under shoulders and knees under hips',
      'Extend one arm and the opposite leg to horizontal',
      'Keep your hips level, resist rotating',
      'Move slowly and keep your back flat throughout'
    ],
    mistakeTitle: 'Hips rotating and back arching',
    mistakePoints: ['Hip lifting on the side of the extended leg', 'Raising the leg above horizontal into a lumbar arch'],
    why: 'Why it matters: this is a stability exercise, so the value is entirely in keeping the hips and spine still. Rotating or arching turns it into a lower back movement instead of core control practice.'
  },
  {
    id: 'mountain-climbers', name: 'Mountain Climbers', riskTag: 'Lower Back / Wrist', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['mountain climbers', 'mountain climber', 'trx mountain climbers'],
    cues: [
      'Start in a solid high plank, hands under shoulders',
      'Drive one knee toward your chest at a time',
      'Keep your hips low and level, do not let them bounce up',
      'Slow down before form deteriorates'
    ],
    mistakeTitle: 'Hips bouncing up with each rep',
    mistakePoints: ['Hips piking up and down as speed increases', 'Lower back sagging as the set goes on'],
    why: 'Why it matters: this is usually done fast for conditioning, and speed is exactly what breaks the plank position. Bouncing hips means the spine is moving repeatedly under load rather than staying braced.'
  },
  {
    id: 'burpee', name: 'Burpee', riskTag: 'Lower Back / Wrist', equip: 'bodyweight', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['burpees', 'burpee', 'squat thrust'],
    cues: [
      'Squat down and place your hands before jumping the feet back',
      'Land in a solid plank, not a sagging one',
      'Jump the feet back in under your hips, then stand and jump',
      'Slow the pace as you fatigue rather than letting form go'
    ],
    mistakeTitle: 'Sagging into the plank and rounding to stand',
    mistakePoints: ['Belly-flopping into the bottom with the back arched', 'Rounding the lower back to jump the feet back in under fatigue'],
    why: 'Why it matters: burpees are almost always done for high reps under fatigue, which is when people start slamming into the floor and rounding their back to stand up. Both put avoidable load on the lower back.'
  },
  {
    id: 'glute-bridge', name: 'Glute Bridge', riskTag: 'Lower Back', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['glute bridge', 'trx glute bridge', 'single leg glute bridge', 'glute march'],
    cues: [
      'Lie on your back with knees bent, feet flat and close to your glutes',
      'Drive through your heels and squeeze your glutes to lift',
      'Stop at a straight line from knees to shoulders',
      'Lower with control rather than dropping'
    ],
    mistakeTitle: 'Arching the lower back to lift higher',
    mistakePoints: ['Pushing the hips up past neutral into a lumbar arch', 'Pushing through the toes instead of the heels'],
    why: 'Why it matters: any height beyond a straight line comes from arching the lower back rather than from the glutes, which is the opposite of what this exercise is meant to build.'
  },
  {
    id: 'clamshell', name: 'Clamshell', riskTag: 'Hip', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['clamshells', 'clamshell'],
    cues: [
      'Lie on your side with knees bent and hips stacked',
      'Open the top knee while keeping your feet together',
      'Do not let your hips roll backward as you open',
      'Move slowly, this is a small controlled range'
    ],
    mistakeTitle: 'Rolling the hips back to open further',
    mistakePoints: ['Top hip rotating backward to create more apparent range', 'Rushing through reps with no control'],
    why: 'Why it matters: rolling the pelvis back makes the movement look bigger but takes the glute out of it entirely. Keeping the hips stacked is what makes this small movement worth doing.'
  },
  {
    id: 'side-leg-raise', name: 'Side Leg Raise', riskTag: 'Hip / Lower Back', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['side leg raise', 'floor hip abduction', 'side lying hip adduction'],
    cues: [
      'Lie on your side with your body in a straight line',
      'Raise the top leg to a comfortable height, toes pointing forward',
      'Keep your hips stacked, do not roll backward',
      'Lower with control rather than dropping the leg'
    ],
    mistakeTitle: 'Rolling backward and swinging the leg',
    mistakePoints: ['Hips rotating back so the leg swings in front of the body', 'Raising the leg so high the waist bends sideways'],
    why: 'Why it matters: rolling back turns a glute exercise into a hip flexor one, and lifting too high just side-bends the lumbar spine instead of adding useful range.'
  },
  {
    id: 'floor-hip-extension', name: 'Floor Hip Extension', riskTag: 'Lower Back', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['floor hip extension', 'hip extension', 'glute kickback', 'machine glute kickback', 'cable kickback'],
    cues: [
      'On all fours with a flat back, core braced',
      'Drive one leg back and up using the glute',
      'Stop when your thigh reaches roughly parallel to the floor',
      'Do not let your lower back arch to gain extra height'
    ],
    mistakeTitle: 'Arching the back to kick higher',
    mistakePoints: ['Lower back arching hard as the leg goes up', 'Hips rotating open instead of staying square'],
    why: 'Why it matters: most people run out of hip extension well before they think they do, so the extra height comes from arching the lumbar spine. That trains the lower back, not the glutes.'
  },
  {
    id: 'trx-saw-pike', name: 'TRX Saw Pike', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['trx saw pikes', 'trx pike', 'trx saw'],
    cues: [
      'Feet in the straps, hands under your shoulders in a high plank',
      'Pike your hips up while keeping your legs straight',
      'Return to plank without letting your hips sag',
      'Keep your shoulders stacked over your hands'
    ],
    mistakeTitle: 'Hips sagging on the return to plank',
    mistakePoints: ['Lower back dropping as the hips come back down', 'Shoulders drifting forward past the hands'],
    why: 'Why it matters: suspension straps remove stability, so the sag that would be minor in a floor plank becomes a bigger lumbar load here. Shoulders drifting past the hands also adds strain to the joint.'
  },
  {
    id: 'trx-atomic-pushup', name: 'TRX Atomic Push-Up', riskTag: 'Shoulder / Lower Back', equip: 'bodyweight', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['trx atomic push ups', 'trx atomic push up'],
    cues: [
      'Feet in the straps, hands on the floor in a high plank',
      'Perform a push-up, then tuck the knees toward your chest',
      'Keep your core braced so the hips do not sag between movements',
      'Move at a pace you can control on unstable straps'
    ],
    mistakeTitle: 'Hips sagging between the push-up and the tuck',
    mistakePoints: ['Lower back dropping during the transitions', 'Rushing the reps on an unstable base'],
    why: 'Why it matters: combining two movements on suspension straps means more time in the position where the back can sag. Speed on an unstable surface is where control, and then the back position, is lost.'
  },
  {
    id: 'neck-curl', name: 'Neck Curl', riskTag: 'Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['neck curl', 'neck flexion'],
    cues: [
      'Lie on a bench with your head off the end, or use a neck harness',
      'Curl your chin toward your chest through a comfortable range',
      'Move slowly, never jerking or bouncing',
      'Start with no added weight at all'
    ],
    mistakeTitle: 'Adding weight or speed too soon',
    mistakePoints: ['Using added load before bodyweight range is comfortable', 'Jerking through reps rather than moving smoothly'],
    why: 'Why it matters: the neck is a small, mobile, very consequential part of the spine. Direct neck training can be useful, but it needs a slower and more conservative progression than anything else in the gym.'
  },
  {
    id: 'neck-extension', name: 'Neck Extension', riskTag: 'Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['neck extension'],
    cues: [
      'Lie face down with your head off the end of a bench',
      'Raise your head through a comfortable range only',
      'Never force into maximum extension',
      'Move slowly and stop at the first sign of discomfort'
    ],
    mistakeTitle: 'Forcing full range extension',
    mistakePoints: ['Cranking the head as far back as it will go', 'Adding weight before the movement is comfortable unloaded'],
    why: 'Why it matters: end-range neck extension compresses the small joints at the back of the cervical spine, and loading that position is a fast way to create the kind of neck pain that lingers.'
  },
  {
    id: 'chin-tuck', name: 'Chin Tuck Hold', riskTag: 'Neck', equip: 'bodyweight', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['chin tuck hold', 'chin tuck'],
    cues: [
      'Sit or stand tall, then gently draw your chin straight back',
      'Think of making a double chin without tilting your head down',
      'Hold gently for a few seconds and release',
      'This should never be forceful or painful'
    ],
    mistakeTitle: 'Tilting the head down instead of drawing it back',
    mistakePoints: ['Nodding the chin toward the chest rather than translating it backward', 'Forcing the position hard rather than holding gently'],
    why: 'Why it matters: this is a gentle postural drill, not a strength exercise. Turning it into a forceful chin-to-chest movement just adds neck flexion, which is the opposite of what it is for.'
  },

  /* ===== DUMBBELL — PRESS & CHEST ===== */

  {
    id: 'db-bench', name: 'Dumbbell Bench Press', riskTag: 'Shoulder', equip: 'dumbbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell bench press', 'db bench press', 'dumbbell chest press'],
    cues: [
      'Shoulder blades pulled back and down into the bench',
      'Dumbbells start at chest level, elbows roughly 45 degrees from your torso',
      'Press up and slightly together without clanging the weights',
      'Use your legs to help kick the dumbbells into position at the start'
    ],
    mistakeTitle: 'Lowering too deep with flared elbows',
    mistakePoints: ['Dumbbells dropped far below chest level, over-stretching the shoulder', 'Elbows flared straight out to 90 degrees'],
    why: 'Why it matters: dumbbells let you go deeper than a barbell, which sounds like an advantage but puts the front of the shoulder into a stretched, loaded position. Combined with flared elbows that is where shoulder strain comes from.'
  },
  {
    id: 'incline-db-press', name: 'Incline Dumbbell Press', riskTag: 'Shoulder', equip: 'dumbbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['incline dumbbell press', 'incline dumbbell bench press', 'incline db press'],
    cues: [
      'Bench set to a moderate incline, roughly 30 to 45 degrees',
      'Dumbbells start at chest and shoulder level',
      'Elbows at roughly 45 degrees, press up and slightly in',
      'Lower with control until you feel a stretch in the chest'
    ],
    mistakeTitle: 'Steep incline plus flared elbows',
    mistakePoints: ['Bench so steep it becomes a shoulder press', 'Elbows flaring to 90 degrees at the bottom'],
    why: 'Why it matters: a steep incline plus flared elbows puts the front of the shoulder in a stretched, loaded position at the bottom of every rep, which is a common route to front-shoulder pain.'
  },
  {
    id: 'decline-db-press', name: 'Decline Dumbbell Press', riskTag: 'Shoulder', equip: 'dumbbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['decline dumbbell bench press', 'decline dumbbell press'],
    cues: [
      'Legs secured before you lift the dumbbells into position',
      'Lower to the lower chest with elbows moderately tucked',
      'Press up without clashing the dumbbells together',
      'Have a spotter hand you heavy dumbbells rather than muscling them up'
    ],
    mistakeTitle: 'Getting into position unsafely',
    mistakePoints: ['Wrestling heavy dumbbells into place while inverted', 'Lowering far below chest level with flared elbows'],
    why: 'Why it matters: getting heavy dumbbells into and out of position while on a decline is the genuinely risky part of this exercise, more so than the press itself. Use a spotter for anything heavy.'
  },
  {
    id: 'db-fly', name: 'Dumbbell Chest Fly', riskTag: 'Shoulder', equip: 'dumbbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell chest fly', 'dumbbell fly', 'pec fly', 'incline dumbbell fly', 'decline dumbbell fly'],
    cues: [
      'Slight bend in the elbows held constant through the rep',
      'Lower the dumbbells out to the sides in a wide arc, not straight down',
      'Stop when you feel a stretch across the chest, do not force extra range',
      'Bring the weights back together over your chest with control'
    ],
    mistakeTitle: 'Lowering too deep with locked elbows',
    mistakePoints: ['Elbows straighten out, turning it into a pull on the shoulder joint', 'Lowering past a comfortable stretch, especially on a flat bench'],
    why: 'Why it matters: locked elbows combined with an overstretched bottom position put direct strain on the front of the shoulder, a common way this exercise leads to shoulder strain instead of a chest pump.'
  },
  {
    id: 'db-pullover', name: 'Dumbbell Pullover', riskTag: 'Shoulder', equip: 'dumbbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell pullover'],
    cues: [
      'Lie along or across a bench, holding one dumbbell over your chest',
      'Lower it back over your head with a slight elbow bend',
      'Keep your ribs down so your back does not arch off the bench',
      'Stop at the limit of comfortable shoulder range'
    ],
    mistakeTitle: 'Going too deep with an arched back',
    mistakePoints: ['Lowering far behind the head into an end-range shoulder stretch', 'Lower back arching off the bench to gain extra range'],
    why: 'Why it matters: deep shoulder flexion under load is a vulnerable position for the joint and the biceps tendon, and arching your back to get there just moves the strain to your lumbar spine.'
  },
  {
    id: 'db-floor-press', name: 'Dumbbell Floor Press', riskTag: 'Shoulder / Elbow', equip: 'dumbbell', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell floor press', 'one arm kettlebell floor press', 'one arm kettlebell floor glute bridge press'],
    cues: [
      'Lie on the floor with knees bent, dumbbells over your chest',
      'Lower until your triceps touch the floor, pause briefly',
      'Press up without bouncing your elbows off the ground',
      'Keep your elbows moderately tucked'
    ],
    mistakeTitle: 'Bouncing the elbows off the floor',
    mistakePoints: ['Letting the arms crash down and rebounding off the floor', 'Flaring the elbows so impact travels into the shoulder'],
    why: 'Why it matters: the floor is a hard stop, and slamming into it sends impact up through the elbow into the shoulder rather than being absorbed by muscle.'
  },
  {
    id: 'db-shoulder-press', name: 'Seated Dumbbell Shoulder Press', riskTag: 'Lower Back / Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['seated dumbbell shoulder press', 'dumbbell shoulder press', 'seated shoulder press', 'shoulder press', 'seated smith machine shoulder press', 'machine shoulder press', 'smith machine shoulder press', 'iso-lateral shoulder press'],
    cues: [
      'Back supported against the bench, core braced',
      'Dumbbells start at shoulder height, palms forward or slightly angled',
      'Press up without arching your lower back off the pad',
      'Lower with control back to shoulder height'
    ],
    mistakeTitle: 'Arching off the bench to finish the press',
    mistakePoints: ['Lower back arches and lifts off the pad to help drive the weight up', 'Pressing the dumbbells out in front instead of overhead'],
    why: 'Why it matters: arching off a supported bench defeats the purpose of the back support and shifts strain onto the lumbar spine instead of the shoulders.'
  },
  {
    id: 'arnold-press', name: 'Arnold Press', riskTag: 'Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['arnold press'],
    cues: [
      'Start with dumbbells at shoulder height, palms facing you',
      'Rotate your palms outward as you press overhead',
      'Keep the rotation smooth and controlled, not rushed',
      'Lower back down reversing the rotation with control'
    ],
    mistakeTitle: 'Rushing the rotation / arching to press',
    mistakePoints: ['Rotating too fast, turning it into a jerky press', 'Arching the lower back to help finish the press'],
    why: 'Why it matters: the rotation is what makes this exercise valuable for shoulder health, but rushing it under load can strain the rotator cuff, and arching to compensate for a too-heavy weight shifts risk onto the lower back.'
  },
  {
    id: 'db-lateral-raise', name: 'Dumbbell Lateral Raise', riskTag: 'Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell lateral raise', 'lateral raise', 'side raise', 'seated dumbbell lateral raise', 'one arm dumbbell lateral raise', 'bodyweight lateral raise', 'machine lateral raise', 'standing machine lateral raise', 'incline side lying lateral raise'],
    cues: [
      'Slight bend in the elbows, raise to roughly shoulder height',
      'Lead with your elbows, not your hands',
      'Control the weight on the way down',
      'Keep your torso still, no swaying'
    ],
    mistakeTitle: 'Using momentum / shrugging up',
    mistakePoints: ['Swinging the torso to launch the weights up', 'Shrugging the shoulders up to help lift instead of using the side delts'],
    why: 'Why it matters: swinging and shrugging shift the work onto the traps and can pinch structures under the shoulder, a setup for shoulder impingement over time.'
  },
  {
    id: 'db-front-raise', name: 'Dumbbell Front Raise', riskTag: 'Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell front raise', 'front raise'],
    cues: [
      'Slight bend in the elbows, dumbbells start at your thighs',
      'Raise to roughly shoulder height, no higher',
      'Control the weight down instead of dropping it',
      'Avoid swinging your torso to generate lift'
    ],
    mistakeTitle: 'Raising too high with momentum',
    mistakePoints: ['Swinging the torso back to launch the weight up past shoulder height', 'Using heavier weight than can be controlled through the full range'],
    why: 'Why it matters: raising past shoulder height with momentum puts the front of the shoulder in an impingement-prone position, a common overuse spot for people who do this movement often.'
  },
  {
    id: 'db-reverse-fly', name: 'Dumbbell Reverse Fly', riskTag: 'Shoulder / Lower Back', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell reverse fly', 'reverse fly', 'reverse pec deck', 'machine reverse fly', 'one arm machine reverse fly', 'reverse fly machine'],
    cues: [
      'Hinge forward with a flat back, or use a chest-supported bench',
      'Slight elbow bend held constant throughout',
      'Raise the weights out to the sides, squeezing the shoulder blades',
      'Control the return, no dropping'
    ],
    mistakeTitle: 'Standing up and swinging the weight',
    mistakePoints: ['Torso rising through the set so it becomes an upright swing', 'Using so much weight that only a small range is possible'],
    why: 'Why it matters: this is a small-muscle exercise done in a hinged position, so going heavy means the lower back holds a bent-over position under strain while the rear delts barely work.'
  },
  {
    id: 'db-face-pull', name: 'Dumbbell Face Pull', riskTag: 'Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell face pull'],
    cues: [
      'Hinge forward or lie chest-down on an incline bench',
      'Pull the dumbbells toward your face with elbows high and wide',
      'Squeeze the shoulder blades at the end of the pull',
      'Keep the weight light, this is a control exercise'
    ],
    mistakeTitle: 'Pulling low with elbows dropped',
    mistakePoints: ['Elbows dropping so it becomes a row instead of a face pull', 'Using weight heavy enough to force momentum'],
    why: 'Why it matters: the high-elbow position is the entire point, since it trains the external rotators that protect your shoulder on every press. Dropping the elbows turns it into a row and skips that.'
  },
  {
    id: 'db-y-raise', name: 'Dumbbell Y Raise', riskTag: 'Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell incline y raise', 'y raise', 'cable y raise', 'floor t raise', 'trx deltoid y fly', 'trx t fly', 'lu raise'],
    cues: [
      'Chest supported on an incline bench, arms hanging down',
      'Raise the weights up and out into a Y shape with thumbs up',
      'Keep the movement slow, this is a small muscle group',
      'Use very light weight, often just the empty hands to start'
    ],
    mistakeTitle: 'Using far too much weight',
    mistakePoints: ['Loading heavy enough that the traps and momentum take over', 'Shrugging the shoulders up as the arms rise'],
    why: 'Why it matters: this targets small stabilising muscles around the shoulder blade. Going heavy means the traps take over completely, and you lose both the benefit and the shoulder protection this exercise offers.'
  },
  {
    id: 'db-external-rotation', name: 'Dumbbell External Rotation', riskTag: 'Shoulder', equip: 'dumbbell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell external rotation', 'external rotation', 'cable external rotation', 'cable internal rotation'],
    cues: [
      'Elbow bent to 90 degrees and tucked against your side',
      'Rotate your forearm outward, keeping the elbow pinned',
      'Move slowly through a comfortable range only',
      'Use very light weight, this is rotator cuff work'
    ],
    mistakeTitle: 'Going heavy on rotator cuff work',
    mistakePoints: ['Using weight that forces the whole body to twist', 'Elbow drifting away from the side to gain leverage'],
    why: 'Why it matters: the rotator cuff muscles are small and their job is stability, not force production. Loading them heavily is a reliable way to irritate exactly the tissue this exercise is meant to strengthen.'
  },

  /* ===== DUMBBELL — ROW & BACK ===== */

  {
    id: 'db-row', name: 'Single-Arm Dumbbell Row', riskTag: 'Lower Back', equip: 'dumbbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['single arm dumbbell row', 'dumbbell row', 'one arm row', 'bent over dumbbell row'],
    cues: [
      'Supporting hand and knee on a bench, back flat and roughly parallel to the floor',
      'Pull the dumbbell to your hip, elbow driving back',
      'Avoid rotating your torso as you pull',
      'Lower with control through a full stretch'
    ],
    mistakeTitle: 'Twisting the torso to help the pull',
    mistakePoints: ['Rotating the torso and using body momentum to heave the weight up', 'Lower back sagging or rounding under the supporting side'],
    why: 'Why it matters: twisting takes work off the back muscles and adds rotational stress to the spine, a common cause of lower back tweaks on this exercise.'
  },
  {
    id: 'chest-supported-db-row', name: 'Chest Supported Dumbbell Row', riskTag: 'Shoulder', equip: 'dumbbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['chest supported dumbbell row', 'chest supported row'],
    cues: [
      'Chest on an incline bench, dumbbells hanging straight down',
      'Row up with elbows driving back, squeezing the shoulder blades',
      'Keep your chest on the pad the entire set',
      'Lower to a full stretch under control'
    ],
    mistakeTitle: 'Lifting the chest off the pad to cheat reps',
    mistakePoints: ['Chest coming off the bench to add body english', 'Jerking the dumbbells up rather than rowing them'],
    why: 'Why it matters: the chest support is exactly what makes this row easy on the lower back. Coming off the pad reintroduces the strain the setup exists to remove.'
  },
  {
    id: 'renegade-row', name: 'Renegade Row', riskTag: 'Lower Back / Shoulder', equip: 'dumbbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['renegade row'],
    cues: [
      'High plank position gripping two dumbbells, feet wide for stability',
      'Row one dumbbell while keeping your hips completely level',
      'Resist the urge to rotate as you pull',
      'Use hex dumbbells so they do not roll'
    ],
    mistakeTitle: 'Hips rotating with each row',
    mistakePoints: ['Hips twisting up on the rowing side', 'Feet close together making the position unstable'],
    why: 'Why it matters: this is primarily an anti-rotation core exercise. Letting the hips twist not only wastes that, it loads the lower back in rotation while you are supporting your body weight on one arm.'
  },
  {
    id: 'db-deadlift', name: 'Dumbbell Deadlift', riskTag: 'Lower Back', equip: 'dumbbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell deadlift', 'kettlebell deadlift'],
    cues: [
      'Dumbbells beside your feet or in front of your thighs',
      'Hinge at the hips with a flat back, chest up',
      'Drive through your legs to stand, weights close to your body',
      'Lower under control rather than dropping'
    ],
    mistakeTitle: 'Rounding the back to reach the weights',
    mistakePoints: ['Back rounding to pick up dumbbells set on the floor', 'Weights drifting away from the body during the lift'],
    why: 'Why it matters: it is easy to get casual with dumbbells because the load feels manageable, but a rounded spine under load carries the same risk regardless of what is in your hands.'
  },
  {
    id: 'db-rdl', name: 'Dumbbell Romanian Deadlift', riskTag: 'Lower Back', equip: 'dumbbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell romanian deadlift', 'dumbbell rdl'],
    cues: [
      'Slight knee bend, hinge at the hips with a flat back',
      'Dumbbells travel down close to your legs',
      'Go only as low as your hamstrings allow without rounding',
      'Drive your hips forward to stand'
    ],
    mistakeTitle: 'Rounding the back to chase depth',
    mistakePoints: ['Lower back rounding to lower the weights further', 'Dumbbells drifting forward away from the legs'],
    why: 'Why it matters: rounding under a loaded hinge is a common way people strain their lower back, and dumbbells drifting forward lengthens the lever on your spine.'
  },
  {
    id: 'single-leg-rdl', name: 'Single Leg Romanian Deadlift', riskTag: 'Lower Back / Hamstring', equip: 'dumbbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['single leg romanian deadlift', 'single leg deadlift', 'single leg dumbbell deadlift', 'single leg dumbbell romanian deadlift', 'kettlebell single leg deadlift'],
    cues: [
      'Stand on one leg with a soft knee, other leg extending back as a counterweight',
      'Hinge at the hip with a flat back, hips staying square to the floor',
      'Lower only as far as you can hold position and balance',
      'Touch a wall or rack lightly for balance if needed'
    ],
    mistakeTitle: 'Hips rotating open as you hinge',
    mistakePoints: ['Back hip rotating upward and outward instead of staying square', 'Back rounding as you reach for extra depth'],
    why: 'Why it matters: hip rotation on a single-leg hinge means the lower back is resisting a twist while already in flexion, which is the position it handles worst.'
  },

  /* ===== DUMBBELL — ARMS ===== */

  {
    id: 'db-curl', name: 'Dumbbell Curl', riskTag: 'Lower Back / Elbow', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell curl', 'standing dumbbell curl', 'bicep curl', 'seated dumbbell curl', 'incline dumbbell curl'],
    cues: [
      'Elbows stay close to your torso through the whole rep',
      'Curl with control, no jerking or swinging',
      'Full range of motion, extend without locking hard at the bottom',
      'Squeeze at the top without rolling your shoulders forward'
    ],
    mistakeTitle: 'Swinging with the hips and back',
    mistakePoints: ['Hips and torso jerk to launch the weight up', 'Elbows drift forward, turning it into a shoulder movement'],
    why: 'Why it matters: swinging shifts the load off the bicep and onto your lower back with momentum it was not braced for, a common source of lower back strain on an exercise that should be low-risk.'
  },
  {
    id: 'hammer-curl', name: 'Hammer Curl', riskTag: 'Elbow / Shoulder', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hammer curl', 'cross body hammer curl', 'incline hammer curl', 'seated hammer curl', 'single arm hammer curl', 'preacher hammer curl', 'towel hammer curl', 'cable hammer curl'],
    cues: [
      'Neutral grip with palms facing each other, elbows pinned to your sides',
      'Curl with control, no swinging',
      'Full range of motion without locking out hard at the bottom',
      'Squeeze at the top without shrugging your shoulders'
    ],
    mistakeTitle: 'Using shoulder swing to move heavier weight',
    mistakePoints: ['Shoulders driving forward and up to help lift the weight', 'Elbows drifting forward away from your torso'],
    why: 'Why it matters: swinging shifts tension off the forearm and bicep and adds strain through the shoulder and lower back. The neutral grip is meant to be joint-friendly, which is lost once momentum takes over.'
  },
  {
    id: 'db-reverse-curl', name: 'Dumbbell Reverse Curl', riskTag: 'Elbow / Wrist', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell reverse curl'],
    cues: [
      'Overhand grip, elbows pinned to your sides',
      'Keep your wrists straight and firm',
      'Curl with control, this will be much lighter than a normal curl',
      'Lower slowly rather than letting the weight drop'
    ],
    mistakeTitle: 'Wrists collapsing under load',
    mistakePoints: ['Wrists bending backward as the weight gets heavy', 'Swinging to compensate for too much weight'],
    why: 'Why it matters: the overhand grip loads the wrist extensors directly, and letting the wrist collapse repeatedly is a straightforward route to the outer-elbow pain often called tennis elbow.'
  },
  {
    id: 'zottman-curl', name: 'Zottman Curl', riskTag: 'Elbow / Wrist', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['zottman curl'],
    cues: [
      'Curl up with palms facing up, then rotate to palms down at the top',
      'Lower slowly in the palms-down position',
      'Rotate back at the bottom before the next rep',
      'Use lighter weight, the lowering phase is the hard part'
    ],
    mistakeTitle: 'Rushing the palms-down lowering phase',
    mistakePoints: ['Dropping fast through the reverse-grip lowering', 'Wrists collapsing during the descent'],
    why: 'Why it matters: the controlled palms-down lowering is the whole point of this variation and also where the wrist and forearm are most vulnerable. Rushing it wastes the benefit and strains the wrist.'
  },
  {
    id: 'waiter-curl', name: 'Waiter Curl', riskTag: 'Wrist / Elbow', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['waiter curl'],
    cues: [
      'Hold one dumbbell vertically by the top plate with both hands',
      'Elbows tucked, curl up keeping the dumbbell upright',
      'Keep your wrists straight rather than letting the weight tip back',
      'Use light weight, the grip position limits how much you can control'
    ],
    mistakeTitle: 'Letting the dumbbell tip back onto the wrists',
    mistakePoints: ['Weight tipping backward so the wrists bend under it', 'Going too heavy for a grip that offers little control'],
    why: 'Why it matters: this grip puts the load in a position where the wrists are doing a lot of stabilising work, and a dumbbell tipping back forces them into extension under load.'
  },
  {
    id: 'db-tricep-extension', name: 'Dumbbell Overhead Tricep Extension', riskTag: 'Elbow / Shoulder', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell tricep extension', 'overhead tricep extension', 'seated dumbbell tricep extension', 'tricep extension', 'bodyweight overhead tricep extension', 'bodyweight kneeling tricep extension', 'bodyweight tricep extension', 'machine tricep extension', 'cable overhead tricep extension', 'trx triceps extension'],
    cues: [
      'Dumbbell held overhead with both hands, elbows pointing forward',
      'Lower behind your head by bending only the elbows',
      'Keep your upper arms still and close to your head',
      'Brace your core so your lower back does not arch'
    ],
    mistakeTitle: 'Flaring the elbows and arching the back',
    mistakePoints: ['Elbows flaring out wide instead of staying close to your head', 'Lower back arching to help move the weight'],
    why: 'Why it matters: flared elbows shift stress onto the elbow joint instead of the triceps, and arching to compensate for a too-heavy weight puts the lower back at risk instead.'
  },
  {
    id: 'db-tricep-kickback', name: 'Dumbbell Tricep Kickback', riskTag: 'Lower Back / Elbow', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell tricep kickback', 'tricep kickback', 'cable tricep kickback'],
    cues: [
      'Hinge forward with a flat back, upper arm pinned to your side',
      'Extend your elbow fully by straightening the forearm back',
      'Only the forearm moves, the upper arm stays still',
      'Control the return rather than letting the weight swing'
    ],
    mistakeTitle: 'Swinging the whole arm instead of extending the elbow',
    mistakePoints: ['Upper arm swinging up and down instead of staying pinned', 'Torso rocking to add momentum'],
    why: 'Why it matters: swinging the upper arm turns this into a shoulder movement and takes the work off the triceps, while torso rocking in a hinged position adds unnecessary strain to the lower back.'
  },
  {
    id: 'tate-press', name: 'Tate Press', riskTag: 'Elbow', equip: 'dumbbell', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['tate press'],
    cues: [
      'Lie on a bench with dumbbells over your chest, palms forward',
      'Lower the weights toward your chest by flaring the elbows out and down',
      'Keep the movement controlled, this is an unusual elbow angle',
      'Start light, the position is harder on the elbow than it looks'
    ],
    mistakeTitle: 'Going heavy on an awkward elbow angle',
    mistakePoints: ['Loading it like a skull crusher', 'Dropping fast into the bottom position'],
    why: 'Why it matters: this places the elbow at an unusual angle under load, which is fine at moderate weight but unforgiving when heavy or when the descent is uncontrolled.'
  },
  {
    id: 'db-shrug', name: 'Dumbbell Shrug', riskTag: 'Neck / Trap', equip: 'dumbbell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell shrug'],
    cues: [
      'Stand tall with dumbbells at your sides, shoulders relaxed down',
      'Shrug straight up toward your ears',
      'Pause briefly at the top, then lower under control',
      'Keep your neck neutral, do not push your head forward'
    ],
    mistakeTitle: 'Rolling the shoulders and craning the neck',
    mistakePoints: ['Rolling the shoulders in circles instead of shrugging straight up', 'Head juts forward as the weight gets heavy'],
    why: 'Why it matters: shoulder rolling under heavy load grinds the joint through a range it is not built to handle loaded, and neck straining under heavy dumbbells is a quick route to a strained neck or trap.'
  },
  {
    id: 'db-side-bend', name: 'Dumbbell Side Bend', riskTag: 'Lower Back', equip: 'dumbbell', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell side bend', 'roman chair side bend'],
    cues: [
      'Hold one dumbbell at your side, other hand on your hip or head',
      'Bend sideways only, no leaning forward or twisting',
      'Keep the range modest and controlled',
      'Use light weight, this is a small movement'
    ],
    mistakeTitle: 'Adding twist to a loaded side bend',
    mistakePoints: ['Rotating the torso while bending sideways under load', 'Using heavy weight through a large range'],
    why: 'Why it matters: combining side bending with rotation under load is one of the more disc-unfriendly movements in the gym. Keep it pure side bend, light, and modest in range.'
  },
  {
    id: 'db-thruster', name: 'Dumbbell Thruster', riskTag: 'Shoulder / Lower Back', equip: 'dumbbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell thruster', 'kettlebell lunge press', 'kettlebell offset reverse lunge and press'],
    cues: [
      'Dumbbells at shoulder height, squat to full depth',
      'Drive out of the squat and press overhead in one motion',
      'Brace your core so the lower back does not arch at lockout',
      'Reduce the load as fatigue builds'
    ],
    mistakeTitle: 'Form collapsing under conditioning fatigue',
    mistakePoints: ['Back rounding in the squat portion as you tire', 'Lower back arching hard to finish the press when the legs are gassed'],
    why: 'Why it matters: these are usually programmed for high reps under fatigue, which is exactly when positions break down. Both the spine and shoulders pay for it.'
  },
  {
    id: 'db-snatch', name: 'Dumbbell Snatch', riskTag: 'Shoulder / Lower Back', equip: 'dumbbell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell snatch', 'double kettlebell dead split snatch', 'double kettlebell swing snatch'],
    cues: [
      'Start with the dumbbell between your feet, flat back',
      'Drive with your hips and pull the weight up close to your body',
      'Punch through at the top and lock the arm out overhead',
      'Lower under control rather than dropping the weight'
    ],
    mistakeTitle: 'Catching with a soft arm overhead',
    mistakePoints: ['Elbow not locked at the catch, so the shoulder absorbs the impact', 'Back rounding during the initial pull from the floor'],
    why: 'Why it matters: catching a fast-moving weight overhead with a bent arm puts the load on the shoulder joint rather than a stacked skeleton, and a rounded back during the pull is the usual deadlift risk at speed.'
  },
  {
    id: 'db-front-squat', name: 'Dumbbell Front Squat', riskTag: 'Lower Back / Knee', equip: 'dumbbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell front squat', 'dumbbell squat', 'one arm kettlebell front squat'],
    cues: [
      'Dumbbells racked at your shoulders or held at your sides',
      'Chest tall, core braced, knees tracking over your toes',
      'Squat to a depth you control',
      'Drive up through your whole foot'
    ],
    mistakeTitle: 'Rounding forward under the front-racked weight',
    mistakePoints: ['Upper back rounding as the dumbbells pull you forward', 'Knees caving inward on the way up'],
    why: 'Why it matters: front-loaded weight constantly pulls you into flexion, so bracing matters. Caving knees under any loaded squat put shear stress on the knee ligaments.'
  },
  {
    id: 'goblet-squat', name: 'Goblet Squat', riskTag: 'Lower Back / Knee', equip: 'dumbbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['goblet squat', 'kettlebell goblet squat'],
    cues: [
      'Hold a dumbbell or kettlebell close to your chest with both hands',
      'Feet shoulder-width, elbows brush the inside of your knees at the bottom',
      'Chest stays tall, core braced throughout',
      'Drive up through your whole foot, do not let your heels lift'
    ],
    mistakeTitle: 'Rounding forward under the weight',
    mistakePoints: ['Upper back rounds as the weight pulls you forward', 'Heels lift and weight shifts onto the toes'],
    why: 'Why it matters: rounding under load, even a lighter load, teaches the same pattern that causes back strain on heavier squats later, so it is worth fixing early.'
  },
  {
    id: 'db-calf-raise', name: 'Dumbbell Calf Raise', riskTag: 'Achilles', equip: 'dumbbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['dumbbell walking calf raise'],
    cues: [
      'Dumbbells at your sides, balls of your feet on a step edge',
      'Rise up under control through a full range',
      'Pause briefly at the top of each rep',
      'Lower slowly into the stretch rather than dropping'
    ],
    mistakeTitle: 'Bouncing out of the bottom stretch',
    mistakePoints: ['Fast bouncy reps using the tendon rather than the muscle', 'Short partial range at the top'],
    why: 'Why it matters: bouncing turns this into a ballistic tendon-loading movement rather than a controlled contraction, which is a common way people irritate the Achilles.'
  },

  /* ===== KETTLEBELL ===== */

  {
    id: 'kb-swing', name: 'Kettlebell Swing', riskTag: 'Lower Back', equip: 'kettlebell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['kettlebell swing', 'one arm kettlebell swing', 'alternating arm kettlebell swing'],
    cues: [
      'This is a hip hinge, not a squat, and not a front raise',
      'Hike the bell back between your legs, keeping a flat back',
      'Snap your hips forward hard, the bell floats up on its own',
      'Stop at chest height, arms stay relaxed'
    ],
    mistakeTitle: 'Squatting the swing or lifting with the arms',
    mistakePoints: ['Bending the knees deeply and squatting the bell up instead of hinging', 'Lifting the bell with the shoulders rather than letting hip drive move it'],
    why: 'Why it matters: the swing is safe and effective when the hips do the work and the back stays flat. Turning it into a squat-and-lift means the lower back and shoulders take a load they were never meant to move at that speed.'
  },
  {
    id: 'kb-clean', name: 'Kettlebell Clean', riskTag: 'Wrist / Lower Back', equip: 'kettlebell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['double kettlebell dead clean', 'kettlebell clean'],
    cues: [
      'Hinge and hike the bell back, then drive with the hips',
      'Guide the bell around your hand rather than letting it flip over',
      'Catch it softly in the rack position against your forearm',
      'Keep your wrist straight in the rack, not bent back'
    ],
    mistakeTitle: 'Letting the bell flip over and bang the wrist',
    mistakePoints: ['Bell rotating around and slamming down onto the forearm', 'Wrist bent backward in the rack position'],
    why: 'Why it matters: a kettlebell banging the forearm every rep is the classic sign of a bad clean, and it bruises the wrist and forearm. The bell should rotate around your hand, not swing over it.'
  },
  {
    id: 'kb-press', name: 'Kettlebell Shoulder Press', riskTag: 'Shoulder / Wrist', equip: 'kettlebell', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['one arm kettlebell shoulder press', 'double kettlebell military press', 'kettlebell press'],
    cues: [
      'Start in a solid rack position with a straight wrist',
      'Brace your core and glutes hard before pressing',
      'Press straight up, keeping the bell over your midline',
      'Lock out with the wrist stacked over the elbow and shoulder'
    ],
    mistakeTitle: 'Pressing with a bent wrist and a side lean',
    mistakePoints: ['Wrist bent backward under the bell throughout the press', 'Leaning sideways away from the bell to finish the rep'],
    why: 'Why it matters: a bent wrist under an overhead kettlebell puts constant strain on the joint, and side-leaning to complete the rep loads the lumbar spine laterally, which is a position it tolerates poorly.'
  },
  {
    id: 'kb-turkish-getup', name: 'Turkish Get Up', riskTag: 'Shoulder / Lower Back', equip: 'kettlebell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['kettlebell turkish get ups', 'turkish get up', 'get up'],
    cues: [
      'Learn the full sequence with no weight, then a shoe, then a light bell',
      'Keep your eyes on the bell throughout the movement',
      'Arm stays locked out vertically the entire time',
      'Move slowly through each position rather than rushing between them'
    ],
    mistakeTitle: 'Rushing the sequence with a bent arm',
    mistakePoints: ['Elbow softening so the bell drifts out of the vertical line', 'Moving quickly between positions before the sequence is learned'],
    why: 'Why it matters: this is a long sequence with a weight held overhead the entire time. A soft elbow means the shoulder is holding load off-line in transitional positions, which is where the shoulder is least stable.'
  },
  {
    id: 'kb-windmill', name: 'Kettlebell Windmill', riskTag: 'Lower Back / Shoulder', equip: 'kettlebell', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['kettlebell windmills', 'windmill'],
    cues: [
      'Bell locked out overhead, eyes on it throughout',
      'Push your hip out to the side and hinge, do not just bend sideways',
      'Keep the overhead arm vertical and the elbow locked',
      'Start with no weight to learn the movement pattern'
    ],
    mistakeTitle: 'Side-bending the spine instead of hinging the hip',
    mistakePoints: ['Bending sideways at the waist rather than pushing the hip out', 'Overhead arm drifting out of vertical'],
    why: 'Why it matters: this should be a hip hinge with rotation, not a loaded lateral spine bend. Getting that wrong loads the lumbar spine sideways while a weight is held overhead, which is a poor combination.'
  },
  {
    id: 'kb-row', name: 'Kettlebell Row', riskTag: 'Lower Back', equip: 'kettlebell', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['one arm kettlebell row', 'double kettlebell row', 'kettlebell row'],
    cues: [
      'Hinge forward with a flat back, chest up',
      'Pull the bell to your hip, elbow driving back',
      'Keep your hips square, resist twisting',
      'Lower to a full stretch under control'
    ],
    mistakeTitle: 'Twisting and rounding in the hinge',
    mistakePoints: ['Torso rotating to add range to the pull', 'Lower back rounding as the set gets hard'],
    why: 'Why it matters: a hinged single-arm row asks the spine to resist both flexion and rotation. Losing either one puts the lower back in the position it handles least well.'
  },
  {
    id: 'kb-rotation-lunge', name: 'Kettlebell Rotation Lunge', riskTag: 'Knee / Lower Back', equip: 'kettlebell', group: 'full',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['kettlebell rotation lunge'],
    cues: [
      'Step into a stable lunge before adding the rotation',
      'Rotate through your upper torso, not your lower back',
      'Keep your front knee tracking over your foot as you turn',
      'Move slowly, combining balance and rotation takes control'
    ],
    mistakeTitle: 'Rotating the lower back while the knee drifts',
    mistakePoints: ['Twisting from the lumbar spine instead of the thoracic', 'Front knee caving inward as attention goes to the rotation'],
    why: 'Why it matters: adding rotation to a lunge splits your attention, and the knee usually pays for it. Rotation should come mostly from the upper back, not the lower.'
  },
  {
    id: 'landmine-rotation', name: 'Landmine Rotation', riskTag: 'Lower Back', equip: 'barbell', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['landmine rotation'],
    cues: [
      'Hold the bar end at chest height with both hands, arms fairly straight',
      'Rotate by pivoting your feet and hips, not by twisting your lower back',
      'Keep your core braced and ribs down throughout',
      'Control the arc rather than letting the bar swing you'
    ],
    mistakeTitle: 'Twisting through the lumbar spine',
    mistakePoints: ['Feet staying planted while the lower back does all the rotating', 'Letting the bar swing fast and pull you off balance'],
    why: 'Why it matters: the lumbar spine has very little safe rotation available. This exercise works when your hips and feet turn with the bar, and becomes a lower-back problem when they do not.'
  },
  {
    id: 'pallof-press', name: 'Pallof Press', riskTag: 'Lower Back', equip: 'cable', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['pallof press', 'palloff press'],
    cues: [
      'Stand side-on to the cable, feet shoulder-width, core braced',
      'Press the handle straight out from your chest, resisting rotation',
      'Hold briefly at full extension without letting your torso twist',
      'Return with control, staying braced the whole time'
    ],
    mistakeTitle: 'Letting the torso rotate toward the weight',
    mistakePoints: ['Torso twisting toward the cable instead of staying square', 'Using a weight heavy enough that you cannot resist the pull'],
    why: 'Why it matters: the whole exercise is an anti-rotation drill. Letting your torso rotate means your core is not doing the stabilising work, and picking too heavy a weight just teaches your spine to give in to the pull.'
  },
  {
    id: 'woodchopper', name: 'Cable Woodchopper', riskTag: 'Lower Back', equip: 'cable', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable woodchopper', 'woodchopper', 'wood chopper'],
    cues: [
      'Stand braced with a slight knee bend, pulley set high or low',
      'Rotate through your torso and hips together, pivoting your back foot',
      'Keep your arms fairly straight, this is not an arm exercise',
      'Control the return instead of letting the cable snap you back'
    ],
    mistakeTitle: 'Rotating only through the lower back',
    mistakePoints: ['Twisting mainly through the lumbar spine instead of the hips and torso together', 'Using a weight heavy enough that you lose control of the rotation'],
    why: 'Why it matters: isolating the rotation in your lower back instead of distributing it through your hips is a common way this exercise leads to lower back strain instead of building rotational strength.'
  },

  /* ===== CABLE ===== */

  {
    id: 'cable-fly', name: 'Cable Chest Fly', riskTag: 'Shoulder', equip: 'cable', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable chest fly', 'cable fly', 'cable crossover', 'high to low cable fly', 'low to high cable fly', 'machine chest fly', 'pec deck'],
    cues: [
      'Slight bend in the elbows held constant through the rep',
      'Step forward for tension, feet staggered for balance',
      'Bring your hands together in a wide arc, squeezing your chest',
      'Return with control, do not let the stacks slam'
    ],
    mistakeTitle: 'Turning it into a press by bending the elbows',
    mistakePoints: ['Elbows bending more through the movement, shifting work to the triceps', 'Letting the cables pull your arms back past a comfortable stretch'],
    why: 'Why it matters: once it becomes a press the shoulder absorbs more load at end range, and cables pull continuously at the stretched position, so over-reaching back is easier here than with dumbbells.'
  },
  {
    id: 'cable-chest-press', name: 'Cable Chest Press', riskTag: 'Shoulder', equip: 'cable', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable chest press', 'seated cable chest press', 'chest press', 'machine chest press', 'iso-lateral chest press', 'iso-lateral bench press', 'iso-lateral incline chest press', 'iso-lateral decline chest press', 'wide grip chest press', 'trx chest press', 'smith machine bench press'],
    cues: [
      'Set the handles at roughly chest height',
      'Staggered stance with your core braced',
      'Press forward with elbows at a moderate angle, not flared wide',
      'Control the return rather than letting the cables snap your arms back'
    ],
    mistakeTitle: 'Letting the cables pull the arms too far back',
    mistakePoints: ['Arms pulled back well past the torso at the start of each rep', 'Elbows flared to 90 degrees throughout'],
    why: 'Why it matters: cables keep tension at end range, so the stretched position at the back of each rep is loaded in a way a barbell never is. Combined with flared elbows that puts real strain on the front of the shoulder.'
  },
  {
    id: 'cable-row', name: 'Seated Cable Row', riskTag: 'Lower Back', equip: 'cable', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['seated cable row', 'seated row', 'cable row', 'wide grip seated cable row', 'one arm seated cable row', 'machine row', 'iso-lateral row', 'iso-lateral low row', 'cable bent over row'],
    cues: [
      'Sit tall, slight forward hip hinge to start, back flat',
      'Pull to your torso with elbows driving back and down',
      'Squeeze your shoulder blades together at the end of the pull',
      'Return with control, do not let the weight yank you forward'
    ],
    mistakeTitle: 'Excessive back rocking',
    mistakePoints: ['Rocking the torso hard forward and back to add momentum', 'Rounding the lower back on the return'],
    why: 'Why it matters: rocking turns a controlled back exercise into a lower-back movement it was not meant to be, adding strain with every rep.'
  },
  {
    id: 'face-pull', name: 'Face Pull', riskTag: 'Shoulder', equip: 'cable', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['face pull', 'face pulls'],
    cues: [
      'Rope attachment set at roughly face or eye height',
      'Pull toward your face, leading with your elbows high and wide',
      'Squeeze your shoulder blades and rotate your hands back at the end',
      'Control the return, do not let the weight yank your arms forward'
    ],
    mistakeTitle: 'Pulling low with elbows down',
    mistakePoints: ['Pulling the rope toward your chest instead of your face, elbows dropping low', 'Using heavy weight that forces momentum instead of a controlled squeeze'],
    why: 'Why it matters: pulling low turns this into a row and skips the rear-delt and rotator cuff work it is meant for. The whole point is training the position that protects your shoulders on every other press.'
  },
  {
    id: 'straight-arm-pulldown', name: 'Straight-Arm Cable Pulldown', riskTag: 'Shoulder', equip: 'cable', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['straight arm pulldown', 'straight-arm pulldown', 'straight arm cable pulldown', 'cross body lat pull around'],
    cues: [
      'Slight forward hip hinge, arms straight with a soft bend in the elbows',
      'Pull the bar down in an arc to your thighs using your lats',
      'Keep the same slight elbow bend the whole rep',
      'Control the return back up to shoulder height'
    ],
    mistakeTitle: 'Bending the elbows to turn it into a pushdown',
    mistakePoints: ['Elbows bending more through the movement, shifting work to the triceps', 'Leaning body weight back to help pull the bar down'],
    why: 'Why it matters: once the elbows bend and the body leans, the lats stop doing the work and the shoulder takes load in a position it is not meant to control it from.'
  },
  {
    id: 'one-arm-pulldown', name: 'One Arm Lat Pulldown', riskTag: 'Shoulder / Lower Back', equip: 'cable', group: 'back',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['one arm lat pulldown', 'one arm pulldown', 'half kneeling one arm lat pulldown', 'close grip lat pulldown', 'neutral grip lat pulldown', 'reverse grip lat pulldown', 'iso-lateral high row', 'machine high row', 'vertical traction machine'],
    cues: [
      'Kneel or sit tall with your core braced',
      'Pull the handle down and back, elbow driving toward your hip',
      'Resist rotating or side-bending toward the working arm',
      'Control the return to a full stretch'
    ],
    mistakeTitle: 'Side-bending and twisting to complete the pull',
    mistakePoints: ['Leaning hard away from the cable to gain leverage', 'Torso rotating so the lower back does the work'],
    why: 'Why it matters: single-arm cable work naturally pulls you into rotation and side bend, and giving in to that means the lumbar spine is loaded sideways instead of the lat doing the pulling.'
  },
  {
    id: 'cable-pull-through', name: 'Cable Pull Through', riskTag: 'Lower Back', equip: 'cable', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable pull through', 'pull through'],
    cues: [
      'Face away from a low pulley, rope between your legs',
      'Hinge at the hips with a flat back, letting the rope pull you back',
      'Drive your hips forward to stand, squeezing your glutes',
      'Stop at standing, do not lean back at the top'
    ],
    mistakeTitle: 'Turning it into a squat or leaning back at the top',
    mistakePoints: ['Bending the knees deeply so it becomes a squat instead of a hinge', 'Leaning backward past standing at lockout'],
    why: 'Why it matters: this exercise teaches the hip hinge with a light load, so squatting it wastes the point. Leaning back at the top adds lumbar extension under load for no extra glute work.'
  },
  {
    id: 'cable-curl', name: 'Cable Bicep Curl', riskTag: 'Elbow', equip: 'cable', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable bicep curl', 'cable curl', 'one arm cable bicep curl', 'incline cable curl', 'lying cable curl', 'overhead cable curl', 'one arm kettlebell bicep curl', 'trx bicep curl'],
    cues: [
      'Elbows pinned to your sides, cable set low',
      'Curl with control, no leaning back',
      'Full range without snapping into a locked elbow at the bottom',
      'Resist the cable on the way down'
    ],
    mistakeTitle: 'Leaning back and letting the cable snap the arm straight',
    mistakePoints: ['Torso leaning back to counterbalance heavier weight', 'Letting the stack pull the arm into a hard lockout at the bottom'],
    why: 'Why it matters: cables keep tension at the bottom, so a snapped lockout tugs the biceps tendon at full stretch every rep, which is a common cause of elbow tendon pain.'
  },
  {
    id: 'cable-tricep-pushdown', name: 'Triceps Rope Pushdown', riskTag: 'Elbow', equip: 'cable', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['tricep rope pushdown', 'tricep pushdown', 'triceps pushdown', 'cable pushdown', 'single arm tricep pushdown', 'reverse grip tricep pushdown', 'cross body cable tricep extension'],
    cues: [
      'Elbows pinned to your sides, not drifting forward',
      'Push down through full extension without locking out violently',
      'Control the return, do not let the stack slam',
      'Keep your torso upright, no leaning into the movement'
    ],
    mistakeTitle: 'Leaning body weight into the push',
    mistakePoints: ['Leaning forward and using body weight or shoulders to shove the bar down', 'Elbows flaring out away from the torso'],
    why: 'Why it matters: leaning into it takes tension off the triceps and adds load through the shoulder and lower back, while flared elbows stress the elbow joint unevenly.'
  },
  {
    id: 'cable-lateral-raise', name: 'Cable Lateral Raise', riskTag: 'Shoulder', equip: 'cable', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable lateral raise'],
    cues: [
      'Pulley set low, cable crossing in front of your body to the working hand',
      'Slight bend in the elbow, raise out to roughly shoulder height',
      'Lead with your elbow, not your hand',
      'Control the weight back down instead of letting it yank your arm'
    ],
    mistakeTitle: 'Letting the cable yank your torso',
    mistakePoints: ['Leaning away from the machine and using body lean instead of the shoulder', 'Jerking the weight up rather than a smooth raise'],
    why: 'Why it matters: leaning into the cable pull shifts tension off the shoulder and adds unnecessary rotational stress to the spine over repeated reps.'
  },
  {
    id: 'cable-front-raise', name: 'Cable Front Raise', riskTag: 'Shoulder', equip: 'cable', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable front raise', 'one arm cable front raise'],
    cues: [
      'Low pulley behind you, handle held at thigh level',
      'Raise to roughly shoulder height with a slight elbow bend',
      'Keep your torso still, no rocking',
      'Control the return against the cable tension'
    ],
    mistakeTitle: 'Rocking the torso to lift past shoulder height',
    mistakePoints: ['Using hip drive to swing the handle upward', 'Raising well above shoulder height under momentum'],
    why: 'Why it matters: lifting past shoulder height moves the shoulder toward an impingement-prone position, and rocking to get there loads the lower back with the cable pulling behind you.'
  },
  {
    id: 'cable-reverse-fly', name: 'Cable Reverse Fly', riskTag: 'Shoulder', equip: 'cable', group: 'shoulders',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable reverse fly', 'one arm cable reverse fly'],
    cues: [
      'Cables crossed in front at chest height',
      'Slight elbow bend held constant',
      'Pull your arms back and out, squeezing the shoulder blades',
      'Control the return, resist the cable pulling you forward'
    ],
    mistakeTitle: 'Using too much weight and bending the elbows',
    mistakePoints: ['Elbows bending progressively so it becomes a row', 'Torso swinging to help move the weight'],
    why: 'Why it matters: the rear delts are small, so heavy weight turns this into a rowing motion using the bigger back muscles, and the swing that comes with it loads the lower back.'
  },
  {
    id: 'cable-crunch', name: 'Cable Crunch', riskTag: 'Lower Back / Neck', equip: 'cable', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable crunch', 'standing cable crunch', 'high pulley crunch', 'machine seated crunch'],
    cues: [
      'Kneel facing the machine, rope held beside your head',
      'Curl your ribs toward your hips, rounding the upper back only',
      'Keep your hips still, this is not a hip hinge',
      'Return under control rather than letting the stack pull you upright'
    ],
    mistakeTitle: 'Hinging at the hips instead of curling the spine',
    mistakePoints: ['Bending at the hips so it becomes a kneeling hinge', 'Yanking the rope down with the arms and neck'],
    why: 'Why it matters: hinging at the hips means the lower back is holding a loaded bent-over position rather than the abs curling, and pulling with the arms transfers the strain to your neck.'
  },
  {
    id: 'cable-hip-abduction', name: 'Cable Standing Hip Abduction', riskTag: 'Lower Back / Hip', equip: 'cable', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable standing hip abduction', 'hip abduction', 'hip adduction'],
    cues: [
      'Ankle strap on, hold the machine for balance',
      'Lift the leg out to the side with the torso upright',
      'Keep your hips level, do not hike the working side',
      'Control the return rather than letting the cable snap the leg back'
    ],
    mistakeTitle: 'Leaning the torso to gain range',
    mistakePoints: ['Side-bending the torso away from the working leg', 'Hips hiking up so the movement comes from the waist'],
    why: 'Why it matters: most people have less hip abduction range than they think, so extra range comes from side-bending the spine rather than from the glute doing more work.'
  },
  {
    id: 'cable-leg-extension', name: 'Cable Leg Extension', riskTag: 'Knee', equip: 'cable', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['cable leg extension'],
    cues: [
      'Ankle strap attached, hold something stable for balance',
      'Extend the knee smoothly through the range',
      'Do not snap into a hard lockout',
      'Control the return against the cable'
    ],
    mistakeTitle: 'Snapping into lockout',
    mistakePoints: ['Kicking the leg straight fast', 'Letting the cable pull the knee back faster than you can control'],
    why: 'Why it matters: a violent lockout puts sudden stress on the knee joint and patellar tendon, and cables pull continuously so losing control on the return loads the knee at speed.'
  },

  /* ===== MACHINE ===== */

  {
    id: 'leg-extension', name: 'Leg Extension', riskTag: 'Knee', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['leg extension', 'single leg extension'],
    cues: [
      'Back flush against the pad, hips stay planted',
      'Extend through a full range without locking the knee violently',
      'Control the weight down instead of dropping it',
      'Adjust the pad so it sits on your shin, not your ankle'
    ],
    mistakeTitle: 'Slamming into lockout',
    mistakePoints: ['Kicking the weight up fast and snapping the knee straight', 'Using momentum instead of a controlled squeeze'],
    why: 'Why it matters: a violent lockout puts sudden stress on the knee joint and patellar tendon. This is a machine where control matters more than the weight on the stack.'
  },
  {
    id: 'lying-leg-curl', name: 'Lying Leg Curl', riskTag: 'Lower Back / Knee', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['lying leg curl', 'lying hamstring curl', 'prone leg curl', 'single leg lying leg curl', 'standing leg curl'],
    cues: [
      'Hips pressed flat into the bench throughout the set',
      'Ankle pad sits just above your heels, not high on the calf',
      'Curl with control through a full range',
      'Lower the weight slowly instead of letting it drop'
    ],
    mistakeTitle: 'Hips lifting off the bench',
    mistakePoints: ['Hips popping up to help swing the weight', 'Fast, bouncy reps replacing controlled ones'],
    why: 'Why it matters: lifting the hips shifts load onto the lower back and reduces how much the hamstrings actually do, while bouncing adds jarring stress right at the knee.'
  },
  {
    id: 'seated-leg-curl', name: 'Seated Leg Curl', riskTag: 'Knee', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['seated leg curl', 'seated hamstring curl', 'single leg seated leg curl'],
    cues: [
      'Back flush against the pad, thigh pad snug across your lower thighs',
      'Curl through a full range with control',
      'Slight pause at full contraction, then lower slowly',
      'Avoid letting the weight snap your knees straight on the return'
    ],
    mistakeTitle: 'Using momentum instead of a controlled squeeze',
    mistakePoints: ['Kicking the weight into motion rather than pulling smoothly', 'Hips shifting or lifting off the seat to help'],
    why: 'Why it matters: momentum-driven reps put jarring stress right at the knee joint instead of working the hamstring the way the machine is built for.'
  },
  {
    id: 'hack-squat', name: 'Hack Squat Machine', riskTag: 'Knee / Lower Back', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hack squat', 'v squat', 'pendulum squat'],
    cues: [
      'Back and hips flat against the pad throughout',
      'Feet shoulder-width on the platform, knees tracking over toes',
      'Descend under control to a depth you can hold position in',
      'Do not lock the knees out hard at the top'
    ],
    mistakeTitle: 'Hips rounding off the pad at the bottom',
    mistakePoints: ['Lower back peeling away from the pad as you go deep', 'Knees caving inward as you push out of the bottom'],
    why: 'Why it matters: when the hips roll off the back pad the lumbar spine is loaded in flexion with the whole stack on your shoulders, which is the main way people hurt themselves on this machine.'
  },
  {
    id: 'smith-squat', name: 'Smith Machine Squat', riskTag: 'Knee / Lower Back', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['smith machine squat'],
    cues: [
      'Set the safety stops before you start',
      'Feet slightly in front so the fixed bar path suits your body',
      'Keep your back flat against the fixed path rather than fighting it',
      'Knees track over your toes throughout'
    ],
    mistakeTitle: 'Fighting the fixed bar path with bad foot placement',
    mistakePoints: ['Feet directly under the bar, forcing an unnatural knee-forward position', 'Assuming the machine makes depth automatically safe'],
    why: 'Why it matters: the fixed path removes the balance demand but also removes your ability to adjust. If your feet are wrong, your joints absorb the mismatch instead of your body correcting for it.'
  },
  {
    id: 'machine-hip-abduction', name: 'Hip Abduction Machine', riskTag: 'Hip / Lower Back', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['hip abduction machine', 'abduction machine', 'adduction machine'],
    cues: [
      'Sit upright with your back against the pad',
      'Push the pads out through a comfortable range',
      'Return slowly rather than letting the stack slam closed',
      'Do not lean back or use your hands to force extra range'
    ],
    mistakeTitle: 'Letting the stack slam closed on the return',
    mistakePoints: ['Releasing so the weight snaps the legs back together', 'Forcing range beyond comfortable hip mobility'],
    why: 'Why it matters: on the adduction version especially, letting the stack snap your legs closed puts a fast stretch on the groin muscles under load, which is a straightforward way to strain them.'
  },
  {
    id: 'torso-rotation-machine', name: 'Torso Rotation Machine', riskTag: 'Lower Back', equip: 'machine', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['torso rotation machine', 'rotary torso machine'],
    cues: [
      'Sit tall with the pads set so you start in a neutral position',
      'Rotate through a modest range only, never to end range',
      'Move slowly with light weight',
      'Skip this machine entirely if you have any history of disc problems'
    ],
    mistakeTitle: 'Loading end-range spinal rotation',
    mistakePoints: ['Twisting as far as the machine allows under load', 'Using heavy weight and fast reps'],
    why: 'Why it matters: the lumbar spine has only a small amount of safe rotation, and this machine can force well past it while loaded. Of all the machines in a commercial gym, this is the one most worth being conservative with.'
  },
  {
    id: 'abcoaster', name: 'Ab Coaster', riskTag: 'Lower Back', equip: 'machine', group: 'core',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['abcoaster', 'ab coaster'],
    cues: [
      'Grip the handles with your shoulders set, knees on the pads',
      'Curl your pelvis up rather than just swinging your knees',
      'Control the return instead of letting the carriage drop',
      'Keep the range modest at first'
    ],
    mistakeTitle: 'Swinging the carriage with momentum',
    mistakePoints: ['Letting the carriage swing freely rather than controlling each rep', 'Pulling with the arms and shoulders instead of the abs'],
    why: 'Why it matters: the machine swings on a track, so it is easy to let momentum do everything. That means the abs do little while the lower back absorbs the swing at each end.'
  },
  {
    id: 'assisted-dip-machine', name: 'Assisted Dip Machine', riskTag: 'Shoulder', equip: 'machine', group: 'chest',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['assisted dips', 'assisted dip machine'],
    cues: [
      'Set the assistance so you can complete controlled reps',
      'Shoulders pulled down and back before you lower',
      'Stop at roughly elbow-level depth, not deeper',
      'Control the descent rather than dropping onto the assist pad'
    ],
    mistakeTitle: 'Descending too deep because the assistance makes it feel easy',
    mistakePoints: ['Dropping well below elbow-level depth', 'Shoulders rolling forward at the bottom'],
    why: 'Why it matters: the assistance reduces how much weight your shoulder holds but does not change the joint angle. Deep dips are shoulder-unfriendly whether assisted or not.'
  },
  {
    id: 'machine-hip-thrust', name: 'Machine Hip Thrust', riskTag: 'Lower Back', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['machine hip thrust'],
    cues: [
      'Back supported on the pad, feet flat with shins vertical at the top',
      'Drive through your heels and squeeze your glutes',
      'Stop at a straight line from knees to shoulders',
      'Keep your chin tucked and ribs down'
    ],
    mistakeTitle: 'Hyperextending the lower back at lockout',
    mistakePoints: ['Arching hard to push the pad higher at the top', 'Ribs flaring up instead of the hips finishing the movement'],
    why: 'Why it matters: extra height at the top comes from arching the lumbar spine rather than from the glutes, putting compressive load exactly where this exercise is supposed to build protection.'
  },
  {
    id: 'vertical-leg-press', name: 'Vertical Leg Press', riskTag: 'Lower Back / Knee', equip: 'machine', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['vertical leg press'],
    cues: [
      'Lie flat with your lower back pressed into the pad',
      'Feet shoulder-width on the platform',
      'Lower only as far as your hips stay down',
      'Never lock the knees out hard with the weight directly above you'
    ],
    mistakeTitle: 'Hips curling up off the pad at depth',
    mistakePoints: ['Lower back rounding as the platform comes down toward you', 'Chasing depth with the weight stacked directly overhead'],
    why: 'Why it matters: on a vertical press the load is directly above your hips, so when your lower back rounds it is being compressed by the full stack. Depth should stop where your hips stay flat.'
  },
  {
    id: 'machine-bicep-curl', name: 'Machine Bicep Curl', riskTag: 'Elbow', equip: 'machine', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['machine bicep curl', 'one arm dumbbell preacher curl', 'ez bar preacher curl'],
    cues: [
      'Set the seat so your upper arms rest flat on the pad',
      'Curl through a full range with control',
      'Do not let the weight snap your arms straight at the bottom',
      'Keep your shoulders down rather than shrugging into the rep'
    ],
    mistakeTitle: 'Letting the stack pull the arms into hard extension',
    mistakePoints: ['Releasing fast so the elbow snaps straight at the bottom', 'Lifting the upper arms off the pad to cheat the last reps'],
    why: 'Why it matters: a preacher-style pad puts the biceps at full stretch at the bottom, so letting the weight snap the arm straight there is a direct tug on the tendon in its most vulnerable position.'
  },

  /* ===== REMAINING VARIANTS ===== */

  {
    id: 'bayesian-curl', name: 'Bayesian Cable Curl', riskTag: 'Elbow', equip: 'cable', group: 'arms',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bayesian cable curl', 'bayesian curl'],
    cues: [
      'Cable set low, stand facing away with your arm extended behind you',
      'Elbow stays pinned in place, slightly behind your torso',
      'Curl through a full stretch to a full contraction with control',
      'Do not let your elbow drift forward as you curl'
    ],
    mistakeTitle: 'Letting the elbow drift forward',
    mistakePoints: ['Elbow swinging forward instead of staying pinned behind the torso', 'Using body lean to help start the curl out of the stretch'],
    why: 'Why it matters: the behind-the-body position is what makes this variation useful, but it also puts the biceps at a deep stretch under constant cable tension. Letting the elbow drift or bouncing out of the bottom is a direct tug on the tendon at its most vulnerable point.'
  },
  {
    id: 'bodyweight-squat', name: 'Bodyweight Squat', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['bodyweight squat', 'air squat', 'bodyweight box squat', 'half squat'],
    cues: [
      'Feet roughly shoulder-width, toes slightly turned out',
      'Sit back and down, knees tracking over your toes',
      'Chest stays tall, arms forward for balance',
      'Drive up through your whole foot'
    ],
    mistakeTitle: 'Knees caving in / heels lifting',
    mistakePoints: ['Knees collapsing inward on the way up', 'Heels lifting so the weight shifts onto the toes'],
    why: 'Why it matters: the load is light, but this is where the squat pattern gets learned. A knee-cave or heel-lift habit built here follows you straight into loaded squats, where it actually causes injuries.'
  },
  {
    id: 'landmine-squat', name: 'Landmine Squat', riskTag: 'Knee / Lower Back', equip: 'barbell', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['landmine squat'],
    cues: [
      'Hold the bar end at chest height with both hands',
      'The bar arc lets you sit back further than a normal squat, use that',
      'Chest tall, knees tracking over toes',
      'Drive up without letting the bar pull your torso forward'
    ],
    mistakeTitle: 'Rounding forward as the bar pulls you down',
    mistakePoints: ['Upper back rounding under the front-loaded bar', 'Using the bar to haul yourself up rather than driving with the legs'],
    why: 'Why it matters: this variation is usually chosen because the arc is friendlier on the knees and back, but the front load still pulls you into flexion. Bracing is what keeps that advantage.'
  },
  {
    id: 'trx-squat', name: 'TRX Squat', riskTag: 'Knee', equip: 'bodyweight', group: 'legs',
    correctVideoId: null, mistakeVideoId: null,
    aliases: ['trx squat'],
    cues: [
      'Hold the handles with the straps taut, lean back slightly',
      'Sit back and down with your chest tall',
      'Use the straps for balance, not to pull yourself up',
      'Knees track over your toes throughout'
    ],
    mistakeTitle: 'Pulling yourself up with your arms',
    mistakePoints: ['Hauling on the straps to stand rather than driving with the legs', 'Leaning back so far the straps carry most of your weight'],
    why: 'Why it matters: the straps are there for balance and to let you sit back further. Once your arms are doing the work, your legs are barely loaded and the exercise stops doing anything useful.'
  }

];




