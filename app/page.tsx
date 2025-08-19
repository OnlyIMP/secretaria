'use client';

import React, { useState } from 'react';
import { BookOpen, Users, Calendar, CalendarIcon, FileText, BarChart3, GraduationCap, Camera, ClipboardList, UserCheck, Home, Settings, Music, Shield, Globe, Download, Eye, Edit, Search, ChevronRight, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, XCircle, TrendingUp, Award, Target, User, School, BookOpenCheck, FileCheck, Image, Video, Star } from 'lucide-react';

type Section = 'home' | 'gestao' | 'cultura' | 'identificacao' | 'portais' | 'relatorios' | 
               'planos-aula' | 'planos-curso' | 'lições-brukts' | 'fotos-videos' | 'ppp' | 
               'boletim' | 'diario' | 'matriculas';

export default function SecretariaEducacao() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const sidebarItems = [
    { id: 'home' as Section, label: 'HOME', icon: Home },
    { id: 'gestao' as Section, label: 'GESTÃO', icon: Settings },
    { id: 'cultura' as Section, label: 'CULTURA', icon: Music },
    { id: 'identificacao' as Section, label: 'IDENTIFICAÇÃO E ACESSO', icon: Shield },
    { id: 'portais' as Section, label: 'PORTAIS', icon: Globe },
    { id: 'relatorios' as Section, label: 'RELATÓRIOS', icon: BarChart3 },
    { id: 'planos-aula' as Section, label: 'PLANOS DE AULA', icon: FileText },
    { id: 'planos-curso' as Section, label: 'PLANOS DE CURSO', icon: BookOpen },
    { id: 'lições-brukts' as Section, label: 'LIÇÕES BRUKTS ALFALET', icon: GraduationCap },
    { id: 'fotos-videos' as Section, label: 'FOTOS/VÍDEOS', icon: Camera },
    { id: 'ppp' as Section, label: 'PPP', icon: FileCheck },
    { id: 'boletim' as Section, label: 'BOLETIM', icon: ClipboardList },
    { id: 'diario' as Section, label: 'DIÁRIO DE CLASSE', icon: BookOpenCheck },
    { id: 'matriculas' as Section, label: 'REGISTROS DE MATRÍCULAS', icon: UserCheck }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Painel Principal</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <School className="w-8 h-8" />
                    <span className="text-2xl font-bold">15</span>
                  </div>
                  <p className="text-lg">Escolas Municipais</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8" />
                    <span className="text-2xl font-bold">3.245</span>
                  </div>
                  <p className="text-lg">Alunos Matriculados</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <GraduationCap className="w-8 h-8" />
                    <span className="text-2xl font-bold">187</span>
                  </div>
                  <p className="text-lg">Educadores</p>
                </div>
              </div>
            </div>

            {/* Comunicados */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Comunicados Importantes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4 py-3 bg-yellow-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Reunião Pedagógica Mensal</h4>
                      <p className="text-gray-600 mt-1">Discussão sobre metodologias ativas e avaliação do 2º bimestre</p>
                    </div>
                    <span className="text-sm text-gray-500">15/08/2025</span>
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Festival Cultural de Inverno</h4>
                      <p className="text-gray-600 mt-1">Inscrições abertas para apresentações artísticas e culturais</p>
                    </div>
                    <span className="text-sm text-gray-500">22-30/08/2025</span>
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capacitação em Tecnologia Educacional</h4>
                      <p className="text-gray-600 mt-1">Curso sobre uso de ferramentas digitais em sala de aula</p>
                    </div>
                    <span className="text-sm text-gray-500">05/09/2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Acesso Rápido */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Acesso Rápido</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setActiveSection('boletim')}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <span className="flex items-center">
                      <ClipboardList className="w-5 h-5 mr-3 text-blue-600" />
                      Sistema de Boletins
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <button 
                    onClick={() => setActiveSection('diario')}
                    className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <span className="flex items-center">
                      <BookOpenCheck className="w-5 h-5 mr-3 text-green-600" />
                      Diário de Classe
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <button 
                    onClick={() => setActiveSection('relatorios')}
                    className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                  >
                    <span className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-3 text-purple-600" />
                      Relatórios Gerenciais
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informações de Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">Rua da Educação, 123 - Centro, Cipó/BA</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">(75) 3234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">educacao@cipo.ba.gov.br</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">Seg-Sex: 7h às 17h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'gestao':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Gestão Educacional</h2>
              <p className="text-lg opacity-90">Coordenação estratégica e operacional da educação municipal</p>
            </div>

            {/* Equipe Gestora */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Equipe Gestora</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    MR
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Maria Regina Santos</h4>
                    <p className="text-gray-600">Secretária de Educação</p>
                    <p className="text-sm text-gray-500">(75) 3234-5678 | maria.regina@cipo.ba.gov.br</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    JC
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">João Carlos Oliveira</h4>
                    <p className="text-gray-600">Coordenador Pedagógico</p>
                    <p className="text-sm text-gray-500">(75) 3234-5679 | joao.carlos@cipo.ba.gov.br</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ana Silva Costa</h4>
                    <p className="text-gray-600">Diretora de Cultura</p>
                    <p className="text-sm text-gray-500">(75) 3234-5680 | ana.silva@cipo.ba.gov.br</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    CF
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Carlos Ferreira Lima</h4>
                    <p className="text-gray-600">Supervisor Escolar</p>
                    <p className="text-sm text-gray-500">(75) 3234-5681 | carlos.ferreira@cipo.ba.gov.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projetos Estratégicos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Projetos Estratégicos 2025</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Digitalização das Escolas</h4>
                    <span className="text-sm text-gray-500">75% concluído</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Formação Continuada de Professores</h4>
                    <span className="text-sm text-gray-500">60% concluído</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">Reforma das Bibliotecas Escolares</h4>
                    <span className="text-sm text-gray-500">40% concluído</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metas e Conquistas */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Metas 2025</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">IDEB: Alcançar 7.0 pontos</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">Taxa de aprovação: 96%</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-purple-600" />
                    <span className="text-gray-700">Reduzir evasão em 15%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Conquistas 2024</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3 text-yellow-600" />
                    <span className="text-gray-700">Prêmio Gestão Educacional</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">IDEB 6.8 (acima da meta)</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">100% escolas informatizadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cultura':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Secretaria de Cultura</h2>
              <p className="text-lg opacity-90">Promovendo arte, cultura e tradições do nosso município</p>
            </div>

            {/* Festival Cultural */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Festival Cultural de Inverno 2025</h3>
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">22 a 30 de Agosto</h4>
                    <p className="text-gray-600">9 dias de arte, música e cultura popular</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Inscrições Abertas
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Programação Principal</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Abertura Oficial</p>
                        <p className="text-sm text-gray-600">Praça da Matriz - 19h</p>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">22/08</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Mostra de Dança Folclórica</p>
                        <p className="text-sm text-gray-600">Centro Cultural - 20h</p>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">24/08</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Festival de Música Local</p>
                        <p className="text-sm text-gray-600">Anfiteatro Municipal - 19h</p>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">26/08</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Espaços Culturais</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Centro Cultural Municipal</p>
                      <p className="text-sm text-blue-600">Rua das Artes, 45 - Centro</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Biblioteca Pública</p>
                      <p className="text-sm text-green-600">Av. da Cultura, 123 - Centro</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-medium text-purple-800">Casa da Cultura Popular</p>
                      <p className="text-sm text-purple-600">Rua do Folclore, 78 - São José</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grupos Artísticos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Grupos Artísticos Ativos</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">Coral Municipal</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">32 membros</span>
                  </div>
                  <p className="text-gray-600 text-sm">Música sacra e popular brasileira</p>
                  <p className="text-gray-500 text-xs mt-2">Ensaios: Terças e Quintas - 19h</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">Grupo de Dança Folclórica</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">18 membros</span>
                  </div>
                  <p className="text-gray-600 text-sm">Danças tradicionais baianas</p>
                  <p className="text-gray-500 text-xs mt-2">Ensaios: Sábados - 14h</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">Teatro Amador</h4>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">15 membros</span>
                  </div>
                  <p className="text-gray-600 text-sm">Peças clássicas e contemporâneas</p>
                  <p className="text-gray-500 text-xs mt-2">Ensaios: Quartas - 20h</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'identificacao':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Identificação e Controle de Acesso</h2>
              <p className="text-lg opacity-90">Gestão de usuários e permissões do sistema</p>
            </div>

            {/* Dashboard de Usuários */}
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                  <span className="text-2xl font-bold text-gray-800">8</span>
                </div>
                <h3 className="font-semibold text-gray-800">Administradores</h3>
                <p className="text-sm text-gray-600">Acesso total ao sistema</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-800">23</span>
                </div>
                <h3 className="font-semibold text-gray-800">Coordenadores</h3>
                <p className="text-sm text-gray-600">Gestão pedagógica</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-800">187</span>
                </div>
                <h3 className="font-semibold text-gray-800">Professores</h3>
                <p className="text-sm text-gray-600">Acesso pedagógico</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <User className="w-8 h-8 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-800">45</span>
                </div>
                <h3 className="font-semibold text-gray-800">Secretários</h3>
                <p className="text-sm text-gray-600">Suporte administrativo</p>
              </div>
            </div>

            {/* Últimos Acessos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Últimos Acessos ao Sistema</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      MR
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Maria Regina Santos</p>
                      <p className="text-sm text-gray-600">Secretária de Educação</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-800">Hoje, 14:32</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Online
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      JC
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">João Carlos Oliveira</p>
                      <p className="text-sm text-gray-600">Coordenador Pedagógico</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-800">Hoje, 13:45</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
                      Offline
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      AS
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Ana Silva Costa</p>
                      <p className="text-sm text-gray-600">Diretora de Cultura</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-800">Hoje, 12:18</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Níveis de Permissão */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Níveis de Permissão</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-red-500 bg-red-50">
                    <h4 className="font-semibold text-red-800">Administrador</h4>
                    <p className="text-sm text-red-700">Acesso completo a todas as funcionalidades</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-800">Coordenador</h4>
                    <p className="text-sm text-blue-700">Gestão pedagógica e relatórios</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-800">Professor</h4>
                    <p className="text-sm text-green-700">Diário, planos de aula e boletins</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-800">Secretário</h4>
                    <p className="text-sm text-purple-700">Matrículas e dados administrativos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'portais':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Portais de Acesso</h2>
              <p className="text-lg opacity-90">Acesso especializado por perfil de usuário</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Portal do Professor */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Portal do Professor</h3>
                </div>
                <p className="text-gray-600 mb-4">Acesso completo às ferramentas pedagógicas</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Diário de classe digital</li>
                  <li>• Planos de aula e curso</li>
                  <li>• Lançamento de notas</li>
                  <li>• Relatórios de desempenho</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Acessar Portal
                </button>
              </div>

              {/* Portal do Gestor */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Portal do Gestor</h3>
                </div>
                <p className="text-gray-600 mb-4">Ferramentas de gestão e supervisão</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Dashboard executivo</li>
                  <li>• Relatórios gerenciais</li>
                  <li>• Indicadores educacionais</li>
                  <li>• Gestão de recursos</li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Acessar Portal
                </button>
              </div>

              {/* Portal do Aluno */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Portal do Aluno</h3>
                </div>
                <p className="text-gray-600 mb-4">Acompanhamento acadêmico personalizado</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Boletim escolar online</li>
                  <li>• Frequência e faltas</li>
                  <li>• Cronograma de atividades</li>
                  <li>• Material didático</li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Acessar Portal
                </button>
              </div>

              {/* Portal dos Pais */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Portal dos Pais</h3>
                </div>
                <p className="text-gray-600 mb-4">Acompanhamento da vida escolar dos filhos</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Desempenho acadêmico</li>
                  <li>• Comunicados da escola</li>
                  <li>• Agenda de eventos</li>
                  <li>• Contato com professores</li>
                </ul>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Acessar Portal
                </button>
              </div>

              {/* Portal Administrativo */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Portal Administrativo</h3>
                </div>
                <p className="text-gray-600 mb-4">Gestão administrativa e financeira</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Controle de matrículas</li>
                  <li>• Gestão de funcionários</li>
                  <li>• Relatórios financeiros</li>
                  <li>• Documentação oficial</li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Acessar Portal
                </button>
              </div>

              {/* Portal de Indicadores */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Portal de Indicadores</h3>
                </div>
                <p className="text-gray-600 mb-4">Análise de dados e métricas educacionais</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Dashboard de indicadores</li>
                  <li>• Análises comparativas</li>
                  <li>• Projeções e metas</li>
                  <li>• Relatórios estatísticos</li>
                </ul>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Acessar Portal
                </button>
              </div>
            </div>
          </div>
        );

      case 'relatorios':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Relatórios Gerenciais</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-xl font-bold">94.2%</span>
                  </div>
                  <p className="text-sm">Taxa de Aprovação</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-6 h-6" />
                    <span className="text-xl font-bold">87.5%</span>
                  </div>
                  <p className="text-sm">Frequência Média</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="w-6 h-6" />
                    <span className="text-xl font-bold">6.8</span>
                  </div>
                  <p className="text-sm">IDEB 2023</p>
                </div>
              </div>
            </div>

            {/* Lista de Relatórios */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Relatórios Disponíveis</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Relatório de Desempenho por Escola</h4>
                      <p className="text-sm text-gray-600">Análise comparativa das 15 unidades escolares</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Atualizado: 10/08/2025</span>
                    <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Indicadores Educacionais 2025</h4>
                      <p className="text-sm text-gray-600">IDEB, aprovação, evasão e frequência</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Atualizado: 08/08/2025</span>
                    <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 mr-1" />
                      Excel
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Censo Escolar 2025</h4>
                      <p className="text-sm text-gray-600">Dados completos de matrícula e infraestrutura</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Atualizado: 05/08/2025</span>
                    <button className="flex items-center px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Análise por Escola */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Desempenho por Escola</h3>
              <div className="space-y-4">
                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Centro</h4>
                    <p className="text-sm text-gray-600">456 alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">96.8%</p>
                    <p className="text-sm text-gray-600">Aprovação</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">91.2%</p>
                    <p className="text-sm text-gray-600">Frequência</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Excelente
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Rural São José</h4>
                    <p className="text-sm text-gray-600">234 alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">93.5%</p>
                    <p className="text-sm text-gray-600">Aprovação</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">85.7%</p>
                    <p className="text-sm text-gray-600">Frequência</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bom
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-yellow-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Vila Nova</h4>
                    <p className="text-sm text-gray-600">189 alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">89.3%</p>
                    <p className="text-sm text-gray-600">Aprovação</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">82.1%</p>
                    <p className="text-sm text-gray-600">Frequência</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Regular
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'planos-aula':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Planos de Aula</h2>
              <p className="text-lg opacity-90">Biblioteca digital de planejamentos pedagógicos</p>
            </div>

            {/* Filtros e Busca */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar planos de aula..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Todas as Séries</option>
                  <option>1º Ano</option>
                  <option>2º Ano</option>
                  <option>3º Ano</option>
                  <option>4º Ano</option>
                  <option>5º Ano</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Todas as Disciplinas</option>
                  <option>Português</option>
                  <option>Matemática</option>
                  <option>Ciências</option>
                  <option>História</option>
                  <option>Geografia</option>
                </select>
              </div>

              {/* Lista de Planos */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Alfabetização - Vogais</h4>
                      <p className="text-sm text-gray-600">1º Ano - Português</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Aprovado</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Reconhecimento e escrita das vogais através de atividades lúdicas</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Prof. Maria Santos</span>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </button>
                      <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Operações Básicas</h4>
                      <p className="text-sm text-gray-600">2º Ano - Matemática</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Aprovado</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Adição e subtração com números até 100 usando material concreto</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Prof. João Silva</span>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </button>
                      <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Sistema Solar</h4>
                      <p className="text-sm text-gray-600">3º Ano - Ciências</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Em Revisão</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Exploração dos planetas e características do sistema solar</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Prof. Ana Costa</span>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </button>
                      <button className="flex items-center px-3 py-1 bg-orange-600 text-white rounded text-sm hover:bg-orange-700">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">História do Brasil</h4>
                      <p className="text-sm text-gray-600">4º Ano - História</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Aprovado</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Descobrimento do Brasil e primeiros habitantes</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Prof. Carlos Lima</span>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </button>
                      <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'planos-curso':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Planos de Curso</h2>
              <p className="text-lg opacity-90">Planejamento anual e estrutura curricular</p>
            </div>

            {/* Filtros Avançados */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtros Avançados</h3>
              <div className="grid lg:grid-cols-4 gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Todas as Séries</option>
                  <option>1º Ano</option>
                  <option>2º Ano</option>
                  <option>3º Ano</option>
                  <option>4º Ano</option>
                  <option>5º Ano</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Todas as Disciplinas</option>
                  <option>Português</option>
                  <option>Matemática</option>
                  <option>Ciências</option>
                  <option>História</option>
                  <option>Geografia</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Todos os Status</option>
                  <option>Aprovado</option>
                  <option>Em Revisão</option>
                  <option>Aguardando</option>
                </select>
                <input
                  type="text"
                  placeholder="Buscar conteúdo..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Lista de Planos de Curso */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Português - 1º Ano</h3>
                    <p className="text-gray-600">Alfabetização e Letramento</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Aprovado
                  </span>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium">Carga Horária</p>
                    <p className="text-lg font-bold text-blue-800">200h anuais</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">Unidades Temáticas</p>
                    <p className="text-lg font-bold text-green-800">4 unidades</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium">Objetivos</p>
                    <p className="text-lg font-bold text-purple-800">12 objetivos</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Unidades Temáticas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Oralidade</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Leitura/Escuta</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Escrita</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Análise Linguística</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Última atualização: 15/02/2025</span>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      Visualizar
                    </button>
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Matemática - 2º Ano</h3>
                    <p className="text-gray-600">Números e Operações</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Em Revisão
                  </span>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium">Carga Horária</p>
                    <p className="text-lg font-bold text-blue-800">160h anuais</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">Unidades Temáticas</p>
                    <p className="text-lg font-bold text-green-800">5 unidades</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium">Objetivos</p>
                    <p className="text-lg font-bold text-purple-800">15 objetivos</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Unidades Temáticas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Números</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Álgebra</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Geometria</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Grandezas e Medidas</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Probabilidade</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Última atualização: 10/02/2025</span>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      Visualizar
                    </button>
                    <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Paginação */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                  Anterior
                </button>
                <button className="px-4 py-2 bg-rose-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">2</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">3</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                  Próximo
                </button>
              </div>
            </div>
          </div>
        );

      case 'lições-brukts':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Lições BRUKTS ALFALET</h2>
              <p className="text-lg opacity-90">Metodologia inovadora de alfabetização</p>
            </div>

            {/* Estatísticas Gerais */}
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-800">156</span>
                </div>
                <h3 className="font-semibold text-gray-800">Total de Lições</h3>
                <p className="text-sm text-gray-600">Disponíveis no sistema</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-800">89</span>
                </div>
                <h3 className="font-semibold text-gray-800">Lições Concluídas</h3>
                <p className="text-sm text-gray-600">Por todos os alunos</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-800">234</span>
                </div>
                <h3 className="font-semibold text-gray-800">Alunos Ativos</h3>
                <p className="text-sm text-gray-600">Usando a metodologia</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                  <span className="text-2xl font-bold text-gray-800">87%</span>
                </div>
                <h3 className="font-semibold text-gray-800">Taxa de Sucesso</h3>
                <p className="text-sm text-gray-600">Na alfabetização</p>
              </div>
            </div>

            {/* Módulos de Aprendizagem */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Módulos de Aprendizagem</h3>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Módulo 1: Reconhecimento de Letras</h4>
                      <p className="text-gray-600">Identificação visual e sonora das letras do alfabeto</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Completo
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">32 lições • 234 alunos concluíram</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Módulo 2: Formação de Sílabas</h4>
                      <p className="text-gray-600">Combinação de consoantes e vogais</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Em Andamento
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">28 lições • 182 alunos em progresso</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Módulo 3: Palavras Simples</h4>
                      <p className="text-gray-600">Leitura e escrita de palavras básicas</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Iniciando
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">35 lições • 156 alunos iniciaram</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Módulo 4: Frases e Textos</h4>
                      <p className="text-gray-600">Construção de frases e pequenos textos</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Aguardando
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso</span>
                      <span>12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">31 lições • 67 alunos iniciaram</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Módulo 5: Fluência de Leitura</h4>
                      <p className="text-gray-600">Desenvolvimento da fluência e compreensão</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Bloqueado
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-300 h-3 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">30 lições • Disponível após módulo 4</p>
                </div>
              </div>
            </div>

            {/* Ferramentas de Gestão */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Metodologia BRUKTS</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">Aprendizagem baseada em jogos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">Progressão adaptativa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">Avaliação contínua</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">Relatórios detalhados</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ferramentas de Gestão</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <span className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
                      Relatório de Progresso
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <span className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-green-600" />
                      Gestão de Turmas
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <span className="flex items-center">
                      <Settings className="w-5 h-5 mr-3 text-purple-600" />
                      Configurações
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'fotos-videos':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Galeria de Fotos e Vídeos</h2>
              <p className="text-lg opacity-90">Registro visual das atividades educacionais e culturais</p>
            </div>

            {/* Placeholder para Galeria */}
            <div className="bg-white rounded-xl shadow-lg p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Galeria em Desenvolvimento</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Em breve você poderá visualizar e gerenciar todas as fotos e vídeos das atividades 
                  educacionais, eventos culturais e momentos especiais das nossas escolas.
                </p>
                
                <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <Image className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Fotos de Eventos</h4>
                    <p className="text-sm text-gray-600">Festivais, apresentações e comemorações</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg">
                    <Video className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Vídeos Educativos</h4>
                    <p className="text-sm text-gray-600">Aulas, projetos e atividades pedagógicas</p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg">
                    <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Momentos Especiais</h4>
                    <p className="text-sm text-gray-600">Formaturas, premiações e conquistas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Funcionalidades Futuras */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Funcionalidades Planejadas</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Upload de fotos e vídeos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Organização por eventos e datas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Sistema de tags e categorias</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Compartilhamento controlado</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categorias Previstas</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">Eventos Culturais</p>
                    <p className="text-sm text-blue-600">Festivais, apresentações e mostras</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800">Atividades Pedagógicas</p>
                    <p className="text-sm text-green-600">Aulas práticas e projetos</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-800">Infraestrutura</p>
                    <p className="text-sm text-purple-600">Escolas, equipamentos e melhorias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ppp':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Projeto Político Pedagógico</h2>
              <p className="text-lg opacity-90">Documentos norteadores da educação municipal</p>
            </div>

            {/* Status dos PPPs por Escola */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Status dos PPPs por Escola</h3>
              <div className="space-y-4">
                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Centro</h4>
                    <p className="text-sm text-gray-600">456 alunos</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Aprovado
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Aprovado em</p>
                    <p className="font-semibold text-gray-800">15/03/2024</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Válido até</p>
                    <p className="font-semibold text-gray-800">15/03/2027</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Rural São José</h4>
                    <p className="text-sm text-gray-600">234 alunos</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Aprovado
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Aprovado em</p>
                    <p className="font-semibold text-gray-800">22/02/2024</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Válido até</p>
                    <p className="font-semibold text-gray-800">22/02/2027</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-yellow-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Vila Nova</h4>
                    <p className="text-sm text-gray-600">189 alunos</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Em Revisão
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Enviado em</p>
                    <p className="font-semibold text-gray-800">05/08/2025</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Prazo</p>
                    <p className="font-semibold text-gray-800">20/08/2025</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-red-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Distrito Industrial</h4>
                    <p className="text-sm text-gray-600">312 alunos</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Pendente
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Prazo final</p>
                    <p className="font-semibold text-red-600">30/08/2025</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold text-red-600">Atrasado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estrutura Padrão do PPP */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Estrutura Padrão do PPP</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Seções Obrigatórias</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="text-gray-700">1. Identificação da Escola</span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="text-gray-700">2. Histórico da Instituição</span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="text-gray-700">3. Diagnóstico da Realidade</span>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="text-gray-700">4. Missão e Objetivos</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Componentes Pedagógicos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-gray-700">5. Proposta Curricular</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-gray-700">6. Metodologia de Ensino</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-gray-700">7. Avaliação da Aprendizagem</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-gray-700">8. Plano de Ação</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cronograma de Revisões */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cronograma de Revisões 2025</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">Revisão Anual</p>
                      <p className="text-sm text-gray-600">Todas as escolas</p>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Março 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">Avaliação Intermediária</p>
                      <p className="text-sm text-gray-600">Escolas em desenvolvimento</p>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Agosto 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">Planejamento 2026</p>
                      <p className="text-sm text-gray-600">Preparação do próximo ano</p>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Dezembro 2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Documentos de Apoio</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <span className="flex items-center">
                      <FileText className="w-5 h-5 mr-3 text-blue-600" />
                      Modelo de PPP
                    </span>
                    <Download className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <span className="flex items-center">
                      <FileCheck className="w-5 h-5 mr-3 text-green-600" />
                      Lista de Verificação
                    </span>
                    <Download className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <span className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-3 text-purple-600" />
                      Manual de Elaboração
                    </span>
                    <Download className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'boletim':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Sistema de Boletins</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <ClipboardList className="w-6 h-6" />
                    <span className="text-xl font-bold">3.245</span>
                  </div>
                  <p className="text-sm">Boletins Gerados</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-xl font-bold">94.2%</span>
                  </div>
                  <p className="text-sm">Taxa de Aprovação</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-6 h-6" />
                    <span className="text-xl font-bold">87.5%</span>
                  </div>
                  <p className="text-sm">Frequência Média</p>
                </div>
              </div>
            </div>

            {/* Sistema de Busca */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Buscar Boletim</h3>
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Nome do aluno..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Todas as Escolas</option>
                  <option>EM Centro</option>
                  <option>EM Rural São José</option>
                  <option>EM Vila Nova</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Todas as Turmas</option>
                  <option>1º Ano A</option>
                  <option>2º Ano B</option>
                  <option>3º Ano A</option>
                </select>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Buscar
                </button>
              </div>
            </div>

            {/* Boletins Individuais */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Ana Clara Santos</h4>
                    <p className="text-gray-600">3º Ano A - EM Centro</p>
                    <p className="text-sm text-gray-500">Matrícula: 2025001234</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Aprovada
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Português</span>
                    <span className="font-semibold text-green-600">8.5</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Matemática</span>
                    <span className="font-semibold text-blue-600">7.8</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Ciências</span>
                    <span className="font-semibold text-green-600">9.2</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">História</span>
                    <span className="font-semibold text-green-600">8.0</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Frequência:</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Completo
                  </button>
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Pedro Henrique Lima</h4>
                    <p className="text-gray-600">2º Ano B - EM Rural São José</p>
                    <p className="text-sm text-gray-500">Matrícula: 2025001567</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Recuperação
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Português</span>
                    <span className="font-semibold text-green-600">7.5</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Matemática</span>
                    <span className="font-semibold text-red-600">5.8</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Ciências</span>
                    <span className="font-semibold text-green-600">7.2</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">História</span>
                    <span className="font-semibold text-yellow-600">6.0</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Frequência:</span>
                  <span className="font-semibold text-yellow-600">78%</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Completo
                  </button>
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Distribuição de Conceitos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Distribuição de Conceitos - 2º Bimestre</h3>
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
                  <p className="text-green-800 font-semibold">Aprovados</p>
                  <p className="text-sm text-green-600">2.207 alunos</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">18%</div>
                  <p className="text-yellow-800 font-semibold">Recuperação</p>
                  <p className="text-sm text-yellow-600">584 alunos</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8%</div>
                  <p className="text-blue-800 font-semibold">Em Progresso</p>
                  <p className="text-sm text-blue-600">260 alunos</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">6%</div>
                  <p className="text-red-800 font-semibold">Reprovados</p>
                  <p className="text-sm text-red-600">194 alunos</p>
                </div>
              </div>
            </div>

            {/* Ações em Massa */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ações em Massa</h3>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Exportar Todos os Boletins
                </button>
                <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Relatório de Desempenho
                </button>
                <button className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar por Email
                </button>
                <button className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <FileText className="w-5 h-5 mr-2" />
                  Gerar Atas
                </button>
              </div>
            </div>
          </div>
        );

      case 'diario':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Diário de Classe Digital</h2>
              <p className="text-lg opacity-90">Registro diário de atividades pedagógicas e frequência</p>
            </div>

            {/* Aulas do Dia */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Aulas de Hoje - 15/08/2025</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-4 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Português - 3º Ano A</h4>
                      <p className="text-sm text-gray-600">08:00 - 08:50 | Prof. Maria Santos</p>
                      <p className="text-sm text-green-600">Conteúdo: Interpretação de textos narrativos</p>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Concluída
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-4 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Matemática - 2º Ano B</h4>
                      <p className="text-sm text-gray-600">09:00 - 09:50 | Prof. João Silva</p>
                      <p className="text-sm text-blue-600">Conteúdo: Operações de adição com dezenas</p>
                    </div>
                  </div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Em Andamento
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                  <div className="flex items-center">
                    <CalendarIcon className="w-6 h-6 mr-4 text-gray-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Ciências - 4º Ano A</h4>
                      <p className="text-sm text-gray-600">10:00 - 10:50 | Prof. Ana Costa</p>
                      <p className="text-sm text-gray-600">Conteúdo: Sistema digestivo humano</p>
                    </div>
                  </div>
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Agendada
                  </span>
                </div>
              </div>
            </div>

            {/* Registro de Conteúdo */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Registro de Conteúdo</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Disciplina</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Português</option>
                      <option>Matemática</option>
                      <option>Ciências</option>
                      <option>História</option>
                      <option>Geografia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Turma</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>3º Ano A</option>
                      <option>3º Ano B</option>
                      <option>2º Ano A</option>
                      <option>2º Ano B</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Conteúdo Ministrado</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Descreva o conteúdo da aula..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Atividades Realizadas</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={2}
                      placeholder="Descreva as atividades..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Salvar Registro
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Controle de Frequência</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">3º Ano A - 28 alunos</span>
                    <span className="text-sm text-gray-500">15/08/2025</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">26</div>
                      <p className="text-sm text-green-800">Presentes</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">2</div>
                      <p className="text-sm text-red-800">Ausentes</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700">Alunos Ausentes:</h4>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                        <span className="text-sm text-gray-700">Carlos Eduardo Silva</span>
                        <span className="text-xs text-red-600">Falta justificada</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                        <span className="text-sm text-gray-700">Mariana Costa Santos</span>
                        <span className="text-xs text-red-600">Falta não justificada</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Confirmar Frequência
                  </button>
                </div>
              </div>
            </div>

            {/* Alertas e Pendências */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Alertas e Pendências</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <AlertCircle className="w-6 h-6 mr-4 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Frequência Baixa</h4>
                    <p className="text-sm text-gray-600">3 alunos com frequência abaixo de 75% no mês</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <XCircle className="w-6 h-6 mr-4 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Diários Pendentes</h4>
                    <p className="text-sm text-gray-600">2 registros de aula não finalizados da semana passada</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <CheckCircle className="w-6 h-6 mr-4 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Relatório Mensal</h4>
                    <p className="text-sm text-gray-600">Prazo para envio do relatório: 20/08/2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ferramentas Rápidas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ferramentas Rápidas</h3>
              <div className="grid lg:grid-cols-4 gap-4">
                <button className="flex items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Relatório de Frequência</p>
                  </div>
                </button>
                <button className="flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="text-center">
                    <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Plano de Aula</p>
                  </div>
                </button>
                <button className="flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="text-center">
                    <ClipboardList className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Lista de Chamada</p>
                  </div>
                </button>
                <button className="flex items-center justify-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">Cronograma</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'matriculas':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Registros de Matrículas</h2>
              <p className="text-lg opacity-90">Controle e acompanhamento das matrículas municipais</p>
            </div>

            {/* Estatísticas Gerais */}
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-800">3.245</span>
                </div>
                <h3 className="font-semibold text-gray-800">Total de Matrículas</h3>
                <p className="text-sm text-gray-600">Ano letivo 2025</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-800">+156</span>
                </div>
                <h3 className="font-semibold text-gray-800">Novas Matrículas</h3>
                <p className="text-sm text-gray-600">Este mês</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <UserCheck className="w-8 h-8 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-800">98.7%</span>
                </div>
                <h3 className="font-semibold text-gray-800">Taxa de Retenção</h3>
                <p className="text-sm text-gray-600">Comparado a 2024</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <School className="w-8 h-8 text-orange-600" />
                  <span className="text-2xl font-bold text-gray-800">15</span>
                </div>
                <h3 className="font-semibold text-gray-800">Escolas Ativas</h3>
                <p className="text-sm text-gray-600">Rede municipal</p>
              </div>
            </div>

            {/* Distribuição por Escola */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Distribuição de Matrículas por Escola</h3>
              <div className="space-y-4">
                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Centro</h4>
                    <p className="text-sm text-gray-600">Centro - Urbana</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">456</p>
                    <p className="text-sm text-gray-600">Alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">+23</p>
                    <p className="text-sm text-gray-600">Este mês</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Capacidade: 85%
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Rural São José</h4>
                    <p className="text-sm text-gray-600">São José - Rural</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">234</p>
                    <p className="text-sm text-gray-600">Alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">+12</p>
                    <p className="text-sm text-gray-600">Este mês</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Capacidade: 78%
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Vila Nova</h4>
                    <p className="text-sm text-gray-600">Vila Nova - Urbana</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">189</p>
                    <p className="text-sm text-gray-600">Alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">+8</p>
                    <p className="text-sm text-gray-600">Este mês</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Capacidade: 94%
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 p-4 bg-orange-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">EM Distrito Industrial</h4>
                    <p className="text-sm text-gray-600">Distrito - Urbana</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">312</p>
                    <p className="text-sm text-gray-600">Alunos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">+18</p>
                    <p className="text-sm text-gray-600">Este mês</p>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Capacidade: 82%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gráfico de Acompanhamento */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Evolução Mensal - 2025</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Janeiro</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">2.756</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fevereiro</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">2.987</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Março</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">3.123</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Agosto</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-green-800">3.245</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Distribuição por Série</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-800">1º Ano</span>
                    <span className="text-lg font-bold text-blue-600">687 alunos</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-800">2º Ano</span>
                    <span className="text-lg font-bold text-green-600">654 alunos</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-800">3º Ano</span>
                    <span className="text-lg font-bold text-purple-600">623 alunos</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800">4º Ano</span>
                    <span className="text-lg font-bold text-orange-600">598 alunos</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-gray-800">5º Ano</span>
                    <span className="text-lg font-bold text-red-600">683 alunos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Seção em Desenvolvimento</h2>
            <p className="text-gray-600">Esta funcionalidade estará disponível em breve.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">SECRETARIA DE EDUCAÇÃO E CULTURA</h1>
                <p className="text-blue-200">PREFEITURA MUNICIPAL DE CIPÓ</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-200">Bem-vindo,</p>
              <p className="font-semibold">Administrador</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-white shadow-lg min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Secretaria de Educação e Cultura</h3>
                <p className="text-gray-300 text-sm">Prefeitura Municipal de Cipó/BA</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Contato</h4>
                <p className="text-gray-300 text-sm">Rua da Educação, 123 - Centro</p>
                <p className="text-gray-300 text-sm">(75) 3234-5678</p>
                <p className="text-gray-300 text-sm">educacao@cipo.ba.gov.br</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Horário de Funcionamento</h4>
                <p className="text-gray-300 text-sm">Segunda a Sexta: 7h às 17h</p>
                <p className="text-gray-300 text-sm">Sábado: 8h às 12h</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Redes Sociais</h4>
                <p className="text-gray-300 text-sm">@educacaocipo</p>
                <p className="text-gray-300 text-sm">facebook.com/educacaocipo</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-400 text-sm">
                © 2025 Prefeitura Municipal de Cipó. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                "Educação de qualidade, futuro garantido"
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}