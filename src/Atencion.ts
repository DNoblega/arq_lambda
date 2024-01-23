import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IAtencion {
    Id: number;
    IdBloqueHora: number;
    IdPaciente: number;
    IdTriageMolestia: number;
    IdTriageNivel: number;
    IdTriageTiempo: number;
    DiagnosticoMedico?: null;
    ExamenMedico?: null;
    CertificadoMedico?: null;
    TratamientoMedico?: null;
    MedicamentosMedico?: null;
    ControlMedico?: null;
    IdMedicoHora: number;
    InicioAtencion?: null;
    TerminoAtencion?: null;
    IdVideoCall?: string | null;
    Estado: string;
    FechaCreacion: string;
    IdUsuarioModifica: number;
    FechaModifica: string;
    IdUsuarioCreacion: number;
    TriageObservacion: string;
    NSP: boolean;
    DescripcionNSP?: string | null;
    SospechaCovid19: boolean;
    AntecedentesMedicos: string;
    ValorAtencion?: null;
    ValorConvenio?: null;
    AporteCaff?: null;
    AporteFinanciador?: null;
    AporteSeguro?: null;
    Copago?: null;
    PlanSalud?: null;
    MontoPrestacion?: null;
    BonoActivo: boolean;
    Id_bono: number;
    FolioBono: number;
    Id_atencion_medipass: number;
    Hash?: null;
    IngresoAtencionPaciente?: null;
    IdSesionPlataformaExterna?: null;
    NspPaciente: boolean;
    HoraNuevoOrden?: null;
    IdMedicoHoraReasigna?: null;
    IdMedicoFirmante?: null;
    SolicitaFirma: boolean;
    InicioAtencionPacienteCall?: null;
    ConfirmaPaciente?: Date |null | undefined;
    Particular: boolean;
    IdCliente: number;
    BonoPlataformaExterna?: null;
    MotivoNsp?: null;
    FechaAsignaDesdeFila?: null;
    CancelaPlataformaExterna: boolean;
    AceptaProfesionalInvitado: boolean;
    PatologiaTextoAbierto?: null;
    IdMedicoHoraOriginalAnulada: number;
    ConsentimientoInformado: boolean;
    Peritaje: boolean;
    IdEspecialidadFilaUnica?: null;
    respuestaFonasa?: null;
    Observaciones?: null;
    FechaCreacionAntesReInserta?: null;
    LinkYapp?: null;
    EmailNSP?: null;
    LinkPharol?: null;
    LinkFarmalisto?: null;
    IdEspecialidadDerivacion: number;
    MotivoConsultaMedico?: null;
    FechaInicioCertificado?: null;
    FechaTerminaCertificado?: null;
    IncapacidadMedica?: null;
    LinkVitau?: null;
    CodeMedipass?: null;
    IsFonasa: boolean;
    DiagnosticoPsicopedagogico: string;
    ObjetivosDeLaSesion: string;
    IdProgramaSalud: number;
    IsProgramaSalud: boolean;
}
@Entity({name:"Atenciones"})
export class Atencion extends BaseEntity implements IAtencion{
    @PrimaryGeneratedColumn()
    public Id!: number;
    @Column({type:"int",name:"IdBloqueHora"})
    public IdBloqueHora!: number;
    @Column({type:"int",name:"IdPaciente"})
    IdPaciente!: number;
    @Column({type:"int",name:"IdTriageMolestia"})
    IdTriageMolestia!: number;
    @Column({type:"int",name:"IdTriageNivel"})
    IdTriageNivel!: number;
    @Column({type:"int",name:"IdTriageTiempo"})
    IdTriageTiempo!: number;
    @Column({type:"nvarchar",name:"DiagnosticoMedico",nullable:true})
    DiagnosticoMedico?: null | undefined;
    @Column({type:"nvarchar",name:"ExamenMedico",nullable:true})
    ExamenMedico?: null | undefined;
    @Column({type:"nvarchar",name:"CertificadoMedico",nullable:true})
    CertificadoMedico?: null | undefined;
    @Column({type:"nvarchar",name:"TratamientoMedico",nullable:true})
    TratamientoMedico?: null | undefined;
    @Column({type:"nvarchar",name:"MedicamentosMedico",nullable:true})
    MedicamentosMedico?: null | undefined;
    @Column({type:"nvarchar",name:"ControlMedico",nullable:true})
    ControlMedico?: null | undefined;
    @Column({type:"int",name:"IdMedicoHora",nullable:true})
    IdMedicoHora!: number;
    @Column({type:"datetime",name:"InicioAtencion",nullable:true})
    InicioAtencion?: null | undefined;
    @Column({type:"datetime",name:"TerminoAtencion",nullable:true})
    TerminoAtencion?: null | undefined;
    @Column({type:"nvarchar",name:"IdVideoCall",nullable:true})
    IdVideoCall?: string |null | undefined;
    @Column({type:"nvarchar",name:"Estado"})
    Estado!: string;
    @Column({type:"datetime",name:"FechaCreacion"})
    FechaCreacion!: string;
    @Column({type:"int",name:"IdUsuarioModifica"})
    IdUsuarioModifica!: number;
    @Column({type:"datetime",name:"FechaModifica"})
    FechaModifica!: string;
    @Column({type:"int",name:"IdUsuarioCreacion"})
    IdUsuarioCreacion!: number;
    @Column({type:"nvarchar",name:"TriageObservacion"})
    TriageObservacion!: string;
    @Column({type:"bit",name:"NSP"})
    NSP!: boolean;
    @Column({type:"nvarchar",name:"DescripcionNSP",nullable:true})
    DescripcionNSP?: string | null | undefined;
    @Column({type:"bit",name:"SospechaCovid19"})
    SospechaCovid19!: boolean;
    @Column({type:"nvarchar",name:"AntecedentesMedicos"})
    AntecedentesMedicos!: string;
    @Column({type:"decimal",name:"ValorAtencion",nullable:true})
    ValorAtencion?: null | undefined;
    @Column({type:"decimal",name:"ValorConvenio",nullable:true})
    ValorConvenio?: null | undefined;
    @Column({type:"decimal",name:"AporteCaff",nullable:true})
    AporteCaff?: null | undefined;
    @Column({type:"decimal",name:"AporteFinanciador",nullable:true})
    AporteFinanciador?: null | undefined;
    @Column({type:"decimal",name:"AporteSeguro",nullable:true})
    AporteSeguro?: null | undefined;
    @Column({type:"decimal",name:"Copago",nullable:true})
    Copago?: null | undefined;
    @Column({type:"nvarchar",name:"PlanSalud",nullable:true})
    PlanSalud?: null | undefined;
    @Column({type:"decimal",name:"MontoPrestacion",nullable:true})
    MontoPrestacion?: null | undefined;
    @Column({type:"bit",name:"BonoActivo"})
    BonoActivo!: boolean;
    @Column({type:"int",name:"Id_bono"})
    Id_bono!: number;
    @Column({type:"int",name:"FolioBono"})
    FolioBono!: number;
    @Column({type:"int",name:"Id_atencion_medipass"})
    Id_atencion_medipass!: number;
    @Column({type:"nvarchar",name:"Hash",nullable:true})
    Hash?: null | undefined;
    @Column({type:"datetime",name:"IngresoAtencionPaciente",nullable:true})
    IngresoAtencionPaciente?: null | undefined;
    @Column({type:"int",name:"IdSesionPlataformaExterna",nullable:true})
    IdSesionPlataformaExterna?: null | undefined;
    @Column({type:"bit",name:"NspPaciente"})
    NspPaciente!: boolean;
    @Column({type:"datetime",name:"HoraNuevoOrden",nullable:true})
    HoraNuevoOrden?: null | undefined;
    @Column({type:"int",name:"IdMedicoHoraReasigna",nullable:true})
    IdMedicoHoraReasigna?: null | undefined;
    @Column({type:"int",name:"IdMedicoFirmante",nullable:true})
    IdMedicoFirmante?: null | undefined;
    @Column({type:"bit",name:"SolicitaFirma"})
    SolicitaFirma!: boolean;
    @Column({type:"datetime",name:"InicioAtencionPacienteCall",nullable:true})
    InicioAtencionPacienteCall?: null | undefined;
    @Column({type:"datetime",name:"ConfirmaPaciente",nullable:true})
    ConfirmaPaciente!: Date |null | undefined;
    @Column({type:"bit",name:"Particular"})
    Particular!: boolean;
    @Column({type:"int",name:"IdCliente"})
    IdCliente!: number;
    @Column({type:"int",name:"BonoPlataformaExterna",nullable:true})
    BonoPlataformaExterna?: null | undefined;
    @Column({type:"nvarchar",name:"MotivoNsp",nullable:true})
    MotivoNsp?: null | undefined;
    @Column({type:"datetime",name:"FechaAsignaDesdeFila",nullable:true})
    FechaAsignaDesdeFila?: null | undefined;
    @Column({type:"bit",name:"CancelaPlataformaExterna"})
    CancelaPlataformaExterna!: boolean;
    @Column({type:"bit",name:"AceptaProfesionalInvitado"})
    AceptaProfesionalInvitado!: boolean;
    @Column({type:"nvarchar",name:"PatologiaTextoAbierto",nullable:true})
    PatologiaTextoAbierto?: null | undefined;
    @Column({type:"int",name:"IdMedicoHoraOriginalAnulada"})
    IdMedicoHoraOriginalAnulada!: number;
    @Column({type:"bit",name:"ConsentimientoInformado"})
    ConsentimientoInformado!: boolean;
    @Column({type:"bit",name:"Peritaje"})
    Peritaje!: boolean;
    @Column({type:"int",name:"IdEspecialidadFilaUnica",nullable:true})
    IdEspecialidadFilaUnica?: null | undefined;
    @Column({type:"nvarchar",name:"respuestaFonasa",nullable:true})
    respuestaFonasa?: null | undefined;
    @Column({type:"nvarchar",name:"Observaciones",nullable:true})
    Observaciones?: null | undefined;
    @Column({type:"datetime",name:"FechaCreacionAntesReInserta",nullable:true})
    FechaCreacionAntesReInserta?: null | undefined;
    @Column({type:"nvarchar",name:"LinkYapp",nullable:true})
    LinkYapp?: null | undefined;
    @Column({type:"nvarchar",name:"EmailNSP",nullable:true})
    EmailNSP?: null | undefined;
    @Column({type:"nvarchar",name:"LinkPharol",nullable:true})
    LinkPharol?: null | undefined;
    @Column({type:"nvarchar",name:"LinkFarmalisto",nullable:true})
    LinkFarmalisto?: null | undefined;
    @Column({type:"int",name:"IdEspecialidadDerivacion"})
    IdEspecialidadDerivacion!: number;
    @Column({type:"nvarchar",name:"MotivoConsultaMedico",nullable:true})
    MotivoConsultaMedico?: null | undefined;
    @Column({type:"datetime",name:"FechaInicioCertificado",nullable:true})
    FechaInicioCertificado?: null | undefined;
    @Column({type:"datetime",name:"FechaTerminaCertificado",nullable:true})
    FechaTerminaCertificado?: null | undefined;
    @Column({type:"nvarchar",name:"IncapacidadMedica",nullable:true})
    IncapacidadMedica?: null | undefined;
    @Column({type:"nvarchar",name:"LinkVitau",nullable:true})
    LinkVitau?: null | undefined;
    @Column({type:"nvarchar",name:"CodeMedipass",nullable:true})
    CodeMedipass?: null | undefined;
    @Column({type:"bit",name:"IsFonasa"})
    IsFonasa!: boolean;
    @Column({type:"nvarchar",name:"DiagnosticoPsicopedagogico"})
    DiagnosticoPsicopedagogico!: string;
    @Column({type:"nvarchar",name:"ObjetivosDeLaSesion"})
    ObjetivosDeLaSesion!: string;
    @Column({type:"int",name:"IdProgramaSalud"})
    IdProgramaSalud!: number;
    @Column({type:"bit",name:"IsProgramaSalud"})
    IsProgramaSalud!: boolean;
    
}