import { AddEntity } from './AddEntity';
import { AddPlayer } from './AddPlayer';
import { BiomeDefinitionList } from './BiomeDefinitionList';
import { ChunkRadiusUpdate } from './ChunkRadiusUpdate';
import { ClientCacheStatus } from './ClientCacheStatus';
import { ClientToServerHandshake } from './ClientToServerHandshake';
import { ContainerOpen } from './ContainerOpen';
import { CreativeContent } from './CreativeContent';
import { Disconect } from './Disconect';
import { Interact } from './Interact';
import { LevelChunk } from './LevelChunk';
import { Login } from './Login';
import { ModalFormRequest } from './ModalFormRequest';
import { ModalFormResponse } from './ModalFormResponse';
import { MovePlayer } from './MovePlayer';
import { NetworkChunkPublisherUpdate } from './NetworkChunkPublisherUpdate';
import { NetworkSettings } from './NetworkSettings';
import { PlayStatus } from './PlayStatus';
import { PlayerAction } from './PlayerAction';
import { PlayerAuthInput } from './PlayerAuthInput';
import { PlayerList } from './PlayerList';
import { RequestChunkRadius } from './RequestChunkRadius';
import { RequestNetworkSettings } from './RequestNetworkSettings';
import { ResourcePackClientResponse } from './ResourcePackClientResponse';
import { ResourcePackStack } from './ResourcePackStack';
import { ResourcePacksInfo } from './ResourcePacksInfo';
import { Respawn } from './Respawn';
import { ServerToClientHandshake } from './ServerToClientHandshake';
import { SetDifficulty } from './SetDifficulty';
import { SetEntityData } from './SetEntityData';
import { SetLocalPlayerAsInitialized } from './SetLocalPlayerAsInitialized';
import { SetSpawnPosition } from './SetSpawnPosition';
import { StartGame } from './StartGame';
import { Text } from './Text';
import { TickSync } from './TickSync';
import { ToastRequest } from './ToastRequest';
import { UpdateAbilities } from './UpdateAbilities';
import { UpdateAdventureSettings } from './UpdateAdventureSettings';
import { UpdateAttributes } from './UpdateAttributes';

// Packet IDs
enum Packets {
	Login = 0x01, // 1
	PlayStatus = 0x02, // 2
	ServerToClientHandshake = 0x03, // 3
	ClientToServerHandshake = 0x04, // 4
	Disconect = 0x05, // 5
	ResourcePacksInfo = 0x06, // 6
	ResourcePackStack = 0x07, // 7
	ResourcePackClientResponse = 0x08, // 8
	Text = 0x09, // 9
	// Gap
	StartGame = 0x0b, // 11
	AddPlayer = 0x0c, // 12
	AddEntity = 0x0d, // 13
	// Gap
	MovePlayer = 0x13, // 19
	// Gap
	TickSync = 0x17, // 23
	// Gap
	UpdateAttributes = 0x1d, // 29
	// Gap
	Interact = 0x21, // 33
	// Gap
	PlayerAction = 0x24, // 36
	// Gap
	SetEntityData = 0x27, // 39
	// Gap
	SetSpawnPosition = 0x2b, // 43
	Respawn = 0x2d, // 45
	ContainerOpen = 0x2e, // 46
	// Gap
	LevelChunk = 0x3a, // 58
	SetDifficulty = 0x3c, // 60
	// Gap
	PlayerList = 0x3f, // 63
	// Gap
	RequestChunkRadius = 0x45, // 69
	ChunkRadiusUpdate = 0x46, // 70
	// Gap
	ModalFormRequest = 0x64, // 100
	ModalFormResponse = 0x65, // 101
	// Gap
	SetLocalPlayerAsInitialized = 0x71, // 113
	// Gap
	NetworkChunkPublisherUpdate = 0x79, // 121
	BiomeDefinitionList = 0x7a, // 122
	// Gap
	ClientCacheStatus = 0x81, // 129
	// Gap
	NetworkSettings = 0x8f, // 143
	PlayerAuthInput = 0x90, // 144
	CreativeContent = 0x91, // 145
	// Gap
	ToastRequest = 0xba, // 186
	UpdateAbilities = 0xbb, // 187
	UpdateAdventureSettings = 0xbc, // 188
	// Gap
	RequestNetworkSettings = 0xc1, // 193
}

// Packets
const Packet = {
	[Packets.Login]: Login,
	[Packets.PlayStatus]: PlayStatus,
	[Packets.ServerToClientHandshake]: ServerToClientHandshake,
	[Packets.ClientToServerHandshake]: ClientToServerHandshake,
	[Packets.Disconect]: Disconect,
	[Packets.ResourcePacksInfo]: ResourcePacksInfo,
	[Packets.ResourcePackStack]: ResourcePackStack,
	[Packets.ResourcePackClientResponse]: ResourcePackClientResponse,
	[Packets.Text]: Text,
	// Gap
	[Packets.StartGame]: StartGame,
	[Packets.AddPlayer]: AddPlayer,
	[Packets.AddEntity]: AddEntity,
	// Gap
	[Packets.MovePlayer]: MovePlayer,
	// Gap
	[Packets.TickSync]: TickSync,
	// Gap
	[Packets.UpdateAttributes]: UpdateAttributes,
	// Gap
	[Packets.Interact]: Interact,
	// Gap
	[Packets.PlayerAction]: PlayerAction,
	// Gap
	[Packets.SetEntityData]: SetEntityData,
	// Gap
	[Packets.SetSpawnPosition]: SetSpawnPosition,
	[Packets.Respawn]: Respawn,
	[Packets.ContainerOpen]: ContainerOpen,
	// Gap
	[Packets.LevelChunk]: LevelChunk,
	[Packets.SetDifficulty]: SetDifficulty,
	// Gap
	[Packets.PlayerList]: PlayerList,
	// Gap
	[Packets.RequestChunkRadius]: RequestChunkRadius,
	[Packets.ChunkRadiusUpdate]: ChunkRadiusUpdate,
	// Gap
	[Packets.ModalFormRequest]: ModalFormRequest,
	[Packets.ModalFormResponse]: ModalFormResponse,
	// Gap
	[Packets.SetLocalPlayerAsInitialized]: SetLocalPlayerAsInitialized,
	// Gap
	[Packets.NetworkChunkPublisherUpdate]: NetworkChunkPublisherUpdate,
	[Packets.BiomeDefinitionList]: BiomeDefinitionList,
	// Gap
	[Packets.ClientCacheStatus]: ClientCacheStatus,
	// Gap
	[Packets.NetworkSettings]: NetworkSettings,
	[Packets.PlayerAuthInput]: PlayerAuthInput,
	[Packets.CreativeContent]: CreativeContent,
	// Gap
	[Packets.ToastRequest]: ToastRequest,
	[Packets.UpdateAbilities]: UpdateAbilities,
	[Packets.UpdateAdventureSettings]: UpdateAdventureSettings,
	// Gap
	[Packets.RequestNetworkSettings]: RequestNetworkSettings,
};

export { Packets, Packet };
