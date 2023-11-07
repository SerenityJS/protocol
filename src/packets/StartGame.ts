import { Endianness } from '@serenityjs/binarystream';
import {
	VarInt,
	ZigZag,
	Bool,
	UInt8,
	Float32,
	Int16,
	Int32,
	Int64,
	VarLong,
	ZigZong,
	UInt64,
	BigString,
	Uuid,
	Packet,
	Serialize,
} from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Gamemode, PermissionLevel, Difficulty } from '../enums';
import type { GameRule, Experiment, BlockProperty, ItemState } from '../types';
import {
	Vec3f,
	Vector3f,
	Vec2f,
	Vector2f,
	BlockCoordinate,
	BlockCoordinates,
	GameRules,
	Experiments,
	EducationSharedResourceURI,
	eduResourceUri,
	BlockProperties,
	ItemStates,
	NBT,
} from '../types';

@Packet(0x0b, VarInt)
class StartGame extends Encapsulated {
	@Serialize(ZigZong) public entityId!: bigint;
	@Serialize(VarLong) public runtimeEntityId!: bigint;
	@Serialize(ZigZag) public playerGamemode!: Gamemode;
	@Serialize(Vector3f) public playerPosition!: Vec3f;
	@Serialize(Vector2f) public rotation!: Vec2f;
	@Serialize(UInt64, Endianness.Little) public seed!: bigint;
	@Serialize(Int16, Endianness.Little) public biomeType!: number;
	@Serialize(BigString) public biomeName!: string;
	@Serialize(ZigZag) public dimension!: number;
	@Serialize(ZigZag) public generator!: number;
	@Serialize(ZigZag) public worldGamemode!: Gamemode;
	@Serialize(ZigZag) public difficulty!: Difficulty;
	@Serialize(BlockCoordinates) public spawnPosition!: BlockCoordinate;
	@Serialize(Bool) public achievementsDisabled!: boolean;
	@Serialize(ZigZag) public editorWorldType!: number;
	@Serialize(Bool) public createdInEdior!: boolean;
	@Serialize(Bool) public exportedFromEdior!: boolean;
	@Serialize(ZigZag) public dayCycleStopTime!: number;
	@Serialize(ZigZag) public eduOffer!: number;
	@Serialize(Bool) public eduFeatures!: boolean;
	@Serialize(BigString) public eduProductUuid!: string;
	@Serialize(Float32, Endianness.Little) public rainLevel!: number;
	@Serialize(Float32, Endianness.Little) public lightningLevel!: number;
	@Serialize(Bool) public confirmedPlatformLockedContent!: boolean;
	@Serialize(Bool) public multiplayerGame!: boolean;
	@Serialize(Bool) public broadcastToLan!: boolean;
	@Serialize(VarInt) public xblBroadcastMode!: number;
	@Serialize(VarInt) public platformBroadcastMode!: number;
	@Serialize(Bool) public commandsEnabled!: boolean;
	@Serialize(Bool) public texturePacksRequired!: boolean;
	@Serialize(GameRules) public gamerules!: GameRule[];
	@Serialize(Experiments) public experiments!: Experiment[];
	@Serialize(Bool) public experimentsPreviouslyToggled!: boolean;
	@Serialize(Bool) public bonusChest!: boolean;
	@Serialize(Bool) public mapEnabled!: boolean;
	@Serialize(UInt8) public permissionLevel!: PermissionLevel;
	@Serialize(Int32, Endianness.Little) public serverChunkTickRange!: number;
	@Serialize(Bool) public hasLockedBehaviorPack!: boolean;
	@Serialize(Bool) public hasLockedResourcePack!: boolean;
	@Serialize(Bool) public isFromLockedWorldTemplate!: boolean;
	@Serialize(Bool) public useMsaGamertagsOnly!: boolean;
	@Serialize(Bool) public isFromWorldTemplate!: boolean;
	@Serialize(Bool) public isWorldTemplateOptionLocked!: boolean;
	@Serialize(Bool) public onlySpawnV1Villagers!: boolean;
	@Serialize(Bool) public personaDisabled!: boolean;
	@Serialize(Bool) public customSkinsDisabled!: boolean;
	@Serialize(Bool) public emoteChatMuted!: boolean;
	@Serialize(BigString) public gameVersion!: string;
	@Serialize(Int32, Endianness.Little) public limitedWorldWidth!: number;
	@Serialize(Int32, Endianness.Little) public limitedWorldLength!: number;
	@Serialize(Bool) public isNewNether!: boolean;
	@Serialize(EducationSharedResourceURI) public eduResourceUri!: eduResourceUri;
	@Serialize(Bool) public experimentalGameplayOverride!: boolean;
	@Serialize(UInt8) public chatRestrictionLevel!: number;
	@Serialize(Bool) public disablePlayerInteractions!: boolean;
	@Serialize(BigString) public levelId!: string;
	@Serialize(BigString) public worldName!: string;
	@Serialize(BigString) public premiumWorldTemplateId!: string;
	@Serialize(Bool) public isTrial!: boolean;
	@Serialize(ZigZag) public movementAuthority!: number;
	@Serialize(ZigZag) public rewindHistorySize!: number;
	@Serialize(Bool) public serverAuthoritativeBlockBreaking!: boolean;
	@Serialize(Int64, Endianness.Little) public currentTick!: bigint;
	@Serialize(ZigZag) public enchantmentSeed!: number;
	@Serialize(BlockProperties) public blockProperties!: BlockProperty[];
	@Serialize(ItemStates) public itemStates!: ItemState[];
	@Serialize(BigString) public multiplayerCorrelationId!: string;
	@Serialize(Bool) public serverAuthoritativeInventory!: boolean;
	@Serialize(BigString) public engine!: string;
	@Serialize(NBT) public propertyData!: any;
	@Serialize(UInt64, Endianness.Little) public blockPaletteChecksum!: bigint;
	@Serialize(Uuid) public worldTemplateId!: string;
	@Serialize(Bool) public clientSideGeneration!: boolean;
	@Serialize(Bool) public blockNetworkIdsAreHashes!: boolean;
	@Serialize(Bool) public serverControlledSounds!: boolean;
}

export { StartGame };
